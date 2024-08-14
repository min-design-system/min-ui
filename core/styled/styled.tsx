import { ElementType } from 'react';

import InserterGuard from '@core/styled/serialize/InserterGuard';
import light from '@core/theme/light';
import convertToCssString from '@utils/convertCssString';
import convertHash from '@utils/convertHash';

import attributes from './attributes';
import events from './events';
import Inserter from './serialize/Inserter';
import Updater from './serialize/Updater';
import {
  AsyncStyledValueSerialize,
  CreateStyledFunction,
  StyledValue,
  StyledArrayFunctionWithoutTheme,
  CSSObject
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

          if (!styledValue) {
            return acc + curr;
          }

          if (Promise.resolve(styledValue) === styledValue) {
            asyncStyledValueSerialize[index] = styledValue as Promise<StyledValue>;

            asyncStyledValueSerialize[index].then((newStyledValue) => {
              serializeStyledValues[index] = newStyledValue;
            });

            const currentStyledValue = serializeStyledValues[index];

            if (typeof currentStyledValue === 'string') {
              return `${acc}${currentStyledValue || `[pending:${index}]`}${curr}`;
            }

            return `${acc}${
              currentStyledValue ? convertToCssString(currentStyledValue) : `[pending:${index}]`
            }${curr}`;
          }

          if (typeof styledValue === 'string') {
            return `${acc}${styledValue}${curr}`;
          }

          return `${acc}${convertToCssString(styledValue as CSSObject)}${curr}`;
        }

        return acc + curr;
      });

      const compactReducedStyle = reducedStyle.replace(/\s+/g, ' ').replace(/\n/g, '');
      const hashId = convertHash(compactReducedStyle);
      const className = `min-ui-css-${hashId}`;
      const isGlobalStyle = Tag === 'style' && newProps?.globalStyle;
      const content = isGlobalStyle
        ? compactReducedStyle
        : `.${className} {${compactReducedStyle}}`;

      delete newProps.theme;

      if (isGlobalStyle) {
        return (
          <>
            <Updater content={content} asyncStyledValueSerialize={asyncStyledValueSerialize} />
            <InserterGuard>
              <Inserter content={content} asyncStyledValueSerialize={asyncStyledValueSerialize} />
            </InserterGuard>
          </>
        );
      }

      const FinalTag = Tag as ElementType;
      const filteredProps = Object.keys(newProps)
        .map((key) => {
          if (
            attributes.includes(key.toLocaleLowerCase()) ||
            events.includes(key.toLocaleLowerCase())
          ) {
            return {
              [key]: newProps[key as keyof typeof newProps]
            };
          }

          return null;
        })
        .filter(Boolean)
        .reduce((acc, curr) => ({ ...acc, ...curr }), {});

      // TODO 더 나은 방법 고민
      if (FinalTag === 'input') {
        return (
          <>
            <Updater content={content} asyncStyledValueSerialize={asyncStyledValueSerialize} />
            <InserterGuard>
              <Inserter content={content} asyncStyledValueSerialize={asyncStyledValueSerialize} />
            </InserterGuard>
            <FinalTag
              {...filteredProps}
              className={[className, filteredProps?.className].filter(Boolean).join(' ')}
            >
              {newProps?.children}
            </FinalTag>
          </>
        );
      }

      return (
        <>
          <Updater content={content} asyncStyledValueSerialize={asyncStyledValueSerialize} />
          <FinalTag
            {...filteredProps}
            className={[className, filteredProps?.className].filter(Boolean).join(' ')}
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
