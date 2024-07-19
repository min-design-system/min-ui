import { ElementType } from 'react';

import Updater from '@core/styled/serialize/Updater';
import light from '@core/theme/light';
import convertHash from '@utils/convertHash';

import cache from './cache';
import {
  AsyncStyledValueSerialize,
  CreateStyledFunction,
  StyledValue,
  StyledArrayFunctionWithoutTheme
} from './typing';

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
      const hashId = convertHash(reducedStyle.replace(/\s/g, '').replace(/\n/g, ''));
      const className = `rsc-css-${hashId}`;
      const content = `.${className} { ${reducedStyle} }`;

      collectedStyles.push(content);

      delete newProps.theme;

      const FinalTag = Tag as ElementType;

      return (
        <Updater content={content} asyncStyledValueSerialize={asyncStyledValueSerialize}>
          <FinalTag
            {...newProps}
            className={[className, newProps?.className]
              .filter((newClassName) => newClassName)
              .join(' ')}
          />
        </Updater>
      );
    };
  };
};

export default styled;
