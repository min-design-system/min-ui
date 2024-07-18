import { CSSValue } from './colors/base/typing';

const shadow: Record<'01' | 'table', CSSValue> = {
  '01': '0px 1px 2px 0px rgba(0, 0, 0, 0.08)',
  table: '-1px 0px 2px 0px rgba(0, 0, 0, 0.08)'
};

export default shadow;
