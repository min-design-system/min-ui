import { AsyncStyledValueSerialize } from '@core/styled/typing';
import convertHash from '@utils/convertHash';

interface InserterProps {
  content: string;
  asyncStyledValueSerialize: AsyncStyledValueSerialize;
}

function Inserter({ content, asyncStyledValueSerialize }: InserterProps) {
  if (typeof document === 'undefined') {
    const hashId = convertHash(content.replace(/ /g, '').replace(/\n/g, ''));
    let styleContent = content;

    Object.keys(asyncStyledValueSerialize).forEach((key) => {
      const asKey = key as keyof typeof asyncStyledValueSerialize;

      const promise = asyncStyledValueSerialize[asKey];

      promise?.then((styledValue) => {
        styleContent = styleContent.replace(
          `[pending:${asKey}]`,
          typeof styledValue === 'string'
            ? styledValue
            : Object.entries(styledValue)
                .map(([k, v]) => `${k}:${v}`)
                .join(';')
        );
      });
    });

    return (
      <style
        id={`min-ui-server-style-${hashId}`}
        dangerouslySetInnerHTML={{ __html: styleContent }}
      />
    );
  }

  return null;
}

export default Inserter;
