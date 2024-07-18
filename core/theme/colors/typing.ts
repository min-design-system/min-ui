import { CSSValue } from '@core/theme/colors/base/typing';

export type BrandColorKey = 'primary' | 'secondary' | 'tertiary' | 'danger';

export interface SemanticColor {
  contents: Record<
    | Extract<BrandColorKey, 'primary' | 'danger'>
    | 'default'
    | 'neutral'
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
    | Extract<BrandColorKey, 'primary' | 'danger'>
    | `${Extract<BrandColorKey, 'primary' | 'danger'>}Weak`
    | 'default'
    | 'strong'
    | 'disabled'
    | 'inverse'
    | 'neutral'
    | 'colorMint'
    | 'colorBlue'
    | 'colorMintWeak'
    | 'colorBlueWeak',
    CSSValue
  >;
  border: Record<
    Extract<BrandColorKey, 'danger'> | 'default' | 'weak' | 'strong' | 'neutral' | 'none',
    CSSValue
  >;
}
