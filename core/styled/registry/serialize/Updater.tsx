import { PropsWithChildren } from 'react';

import { AsyncStyledValueSerialize } from '@core/styled/typing';
import convertHash from '@utils/convertHash';

interface UpdaterProps {
  content: string;
  asyncStyledValueSerialize: AsyncStyledValueSerialize;
}

function Updater({
  children,
  content,
  asyncStyledValueSerialize
}: PropsWithChildren<UpdaterProps>) {
  if (typeof document !== 'undefined') {
    const hashId = convertHash(content.replace(/ /g, '').replace(/\n/g, ''));
    const prevStyle = document.getElementById(`style-${hashId}`);
    let styleElement;

    if (prevStyle) {
      styleElement = prevStyle;
      prevStyle.innerHTML = content;
    } else {
      const style = document.createElement('style');
      styleElement = style;
      style.id = `style-${hashId}`;
      style.innerHTML = content;
      document.head.appendChild(style);
    }

    Object.keys(asyncStyledValueSerialize).forEach((key) => {
      const asKey = key as keyof typeof asyncStyledValueSerialize;

      const promise = asyncStyledValueSerialize[asKey];

      promise?.then((styledValue) => {
        styleElement.innerHTML = styleElement.innerHTML.replace(
          `[pending:${asKey}]`,
          typeof styledValue === 'string'
            ? styledValue
            : Object.entries(styledValue)
                .map(([k, v]) => `${k}:${v}`)
                .join(';')
        );
      });
    });
  }

  return children;
}

export default Updater;
