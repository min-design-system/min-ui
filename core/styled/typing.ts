import { ComponentPropsWithRef, JSX, ReactElement } from 'react';

import type { Properties } from 'csstype';

import Theme from '@core/theme/typing';

export type StyledValue = string | number | Properties | null;

export type StyledProps<T extends keyof JSX.IntrinsicElements, P> = ComponentPropsWithRef<T> & {
  theme: Theme;
  globalStyle?: boolean;
} & P;

export type StyledPropsWithoutTheme<T extends keyof JSX.IntrinsicElements, P> = Omit<
  StyledProps<T, P>,
  'theme'
> & {
  theme?: Theme;
};

export interface AsyncStyledValueSerialize {
  [key: string]: Promise<StyledValue> | null;
}

export type StyledArrayFunction<T extends keyof JSX.IntrinsicElements, P> = (
  props: StyledProps<T, P>
) => StyledValue | Promise<StyledValue>;

export type StyledArrayFunctionWithoutTheme<T extends keyof JSX.IntrinsicElements, P> = (
  props: StyledPropsWithoutTheme<T, P>
) => StyledValue | Promise<StyledValue>;

export type CreateStyledTemplate<T extends keyof JSX.IntrinsicElements> = <P>(
  styledArray: TemplateStringsArray,
  ...styledArrayFunctions: StyledArrayFunction<T, P>[]
) => (props: StyledPropsWithoutTheme<T, P>) => ReactElement;

export type CreateStyledObject = {
  [T in keyof JSX.IntrinsicElements]: CreateStyledTemplate<T>;
};

export type CreateStyledFunction = <T extends keyof JSX.IntrinsicElements>(
  Tag: T
) => CreateStyledTemplate<T>;

export interface CreateStyled extends CreateStyledObject, CreateStyledFunction {}
