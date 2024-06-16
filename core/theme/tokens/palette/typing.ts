import { CSSValue } from '@core/theme/tokens/palette/colors/typing';

export type BrandColorKey = 'primary' | 'secondary' | 'tertiary' | 'danger';

export interface Palette {
  content: Record<
    BrandColorKey | 'default' | 'neutral' | 'inverse' | 'disabled' | 'black' | 'white',
    CSSValue
  >;
  background: Record<'default' | 'strong', CSSValue>;
  surface: Record<
    | BrandColorKey
    | `${BrandColorKey}Weak`
    | 'default'
    | 'strong'
    | 'disabled'
    | 'inverse'
    | 'white'
    | 'whiteWeak',
    CSSValue
  >;
  border: Record<
    | BrandColorKey
    | `${BrandColorKey}Weak`
    | 'default'
    | 'weak'
    | 'strong'
    | 'neutral'
    | 'none'
    | 'white',
    CSSValue
  >;
}
