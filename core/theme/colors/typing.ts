import { CSSValue } from '@core/theme/colors/base/typing';

export type BrandColorKey = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'neutral';

export interface SemanticColor {
  contents: Record<
    | Extract<BrandColorKey, 'primary' | 'danger' | 'neutral'>
    | 'default'
    | 'inverse'
    | 'disabled'
    | 'black'
    | 'white'
    | 'whiteWeek'
    | 'colorMint'
    | 'colorBlue',
    CSSValue
  >;
  background: Record<'default' | 'strong' | 'dark', CSSValue>;
  surface: Record<
    | Extract<BrandColorKey, 'primary' | 'danger' | 'neutral'>
    | `${Extract<BrandColorKey, 'primary' | 'danger'>}Weak`
    | 'default'
    | 'strong'
    | 'disabled'
    | 'inverse'
    | 'colorMint'
    | 'colorBlue'
    | 'colorMintWeak'
    | 'colorBlueWeak',
    CSSValue
  >;
  border: Record<
    Extract<BrandColorKey, 'danger' | 'neutral'> | 'default' | 'weak' | 'strong' | 'none',
    CSSValue
  >;
}
