import { useInsertionEffect } from 'react';

import { AsyncStyledValueSerialize } from '@core/styled/typing';
import convertHash from '@utils/convertHash';

interface UpdaterProps {
  content: string;
  asyncStyledValueSerialize: AsyncStyledValueSerialize;
}

function Updater({ content, asyncStyledValueSerialize }: UpdaterProps) {
  useInsertionEffect(() => {
    const hashId = convertHash(content);
    let newStyleElement = null;
    const prevStyleElement = document.head.querySelector(`#min-ui-style-${hashId}`);

    if (prevStyleElement) {
      prevStyleElement.innerHTML = content;
      newStyleElement = prevStyleElement;
    } else {
      newStyleElement = document.createElement('style');
      newStyleElement.id = `min-ui-style-${hashId}`;
      newStyleElement.innerHTML = content;
      document.head.appendChild(newStyleElement);
    }

    Object.keys(asyncStyledValueSerialize).forEach((key) => {
      const asKey = key as keyof typeof asyncStyledValueSerialize;

      const promise = asyncStyledValueSerialize[asKey];

      promise?.then((styledValue) => {
        if (!styledValue) return;

        newStyleElement.innerHTML = newStyleElement.innerHTML
          .replace(
            `[pending:${asKey}]`,
            typeof styledValue === 'string'
              ? styledValue
              : Object.entries(styledValue)
                  .map(([k, v]) => `${k}:${v}`)
                  .join(';')
          )
          .replace(/\s+/g, ' ')
          .replace(/\n/g, '');
      });
    });
  }, [content, asyncStyledValueSerialize]);

  return null;
}

export default Updater;
