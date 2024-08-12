import { CSSValue } from '@core/theme/colors/base/typing';

export type BrandColorKey = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'neutral';
export type SecondaryColorKey = 'blue' | 'mint' | 'inverse' | 'black' | 'white';

export interface SemanticColor {
  contents: Record<
    | Extract<BrandColorKey, 'primary' | 'danger' | 'neutral'>
    | SecondaryColorKey
    | `${Extract<SecondaryColorKey, 'white'>}Weak`
    | 'default'
    | 'disabled',
    CSSValue
  >;
  background: Record<'default' | 'strong' | 'dark', CSSValue>;
  surface: Record<
    | Extract<BrandColorKey, 'primary' | 'danger' | 'neutral'>
    | `${Extract<BrandColorKey, 'primary' | 'danger'>}Weak`
    | Extract<SecondaryColorKey, 'blue' | 'mint' | 'inverse'>
    | `${Extract<SecondaryColorKey, 'blue' | 'mint'>}Weak`
    | 'default'
    | 'strong'
    | 'disabled',
    CSSValue
  >;
  border: Record<
    Extract<BrandColorKey, 'danger' | 'neutral'> | 'default' | 'weak' | 'stronger' | 'none',
    CSSValue
  >;
}
