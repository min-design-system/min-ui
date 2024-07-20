import { ElementType } from 'react';

import InserterGuard from '@core/styled/serialize/InserterGuard';
import light from '@core/theme/light';
import convertHash from '@utils/convertHash';

import cache from './cache';
import Inserter from './serialize/Inserter';
import Updater from './serialize/Updater';
import {
  AsyncStyledValueSerialize,
  CreateStyledFunction,
  StyledValue,
  StyledArrayFunctionWithoutTheme
} from './typing';

// TODO 중복 로직 모듈화
const styled: CreateStyledFunction = (Tag) => {
  return (styledArray, ...styledArrayFunctions) => {
    const asyncStyledValueSerialize: AsyncStyledValueSerialize = {};
    const serializeStyledValues: Array<StyledValue> = [];

    return function createStyled(props) {
      const newProps = { ...props };

      if (!props?.theme) {
        newProps.theme = light;
      }

      const reducedStyle = styledArray.reduce((acc, curr, index) => {
        const styledArrayFunction = styledArrayFunctions?.[
          index - 1
        ] as StyledArrayFunctionWithoutTheme<typeof Tag, typeof props>;

        if (styledArrayFunction) {
          const styledValue = styledArrayFunction(newProps);

          if (Promise.resolve(styledValue) === styledValue) {
            asyncStyledValueSerialize[index] = styledValue;

            styledValue.then((newStyledValue) => {
              serializeStyledValues[index] = newStyledValue;
            });

            const currentStyledValue = serializeStyledValues[index];

            if (typeof currentStyledValue === 'string') {
              return `${acc}${currentStyledValue || `[pending:${index}]`}${curr}`;
            }

            return `${acc}${
              currentStyledValue
                ? Object.entries(currentStyledValue)
                    .map(([k, v]) => `${k}:${v}`)
                    .join(';')
                : `[pending:${index}]`
            }${curr}`;
          }

          if (typeof styledValue === 'string') {
            return `${acc}${styledValue}${curr}`;
          }

          return `${acc}${Object.entries(styledValue)
            .map(([k, v]) => `${k}:${v}`)
            .join(';')}${curr}`;
        }

        return acc + curr;
      });

      const collectedStyles = cache();
      const compactReducedStyle = reducedStyle.replace(/\s+/g, ' ').replace(/\n/g, '');
      const hashId = convertHash(compactReducedStyle);
      const className = `min-ui-css-${hashId}`;
      const content = `.${className} {${compactReducedStyle}}`;

      collectedStyles.push(content);

      delete newProps.theme;

      const FinalTag = Tag as ElementType;

      return (
        <>
          <Updater content={content} asyncStyledValueSerialize={asyncStyledValueSerialize} />
          <FinalTag
            {...newProps}
            className={[className, newProps?.className]
              .filter((newClassName) => newClassName)
              .join(' ')}
          >
            <InserterGuard>
              <Inserter content={content} asyncStyledValueSerialize={asyncStyledValueSerialize} />
            </InserterGuard>
            {newProps?.children}
          </FinalTag>
        </>
      );
    };
  };
};

export default styled;
