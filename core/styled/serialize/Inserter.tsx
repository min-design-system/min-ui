import { AsyncStyledValueSerialize } from '@core/styled/typing';
import convertHash from '@utils/convertHash';

interface InserterProps {
  content: string;
  asyncStyledValueSerialize: AsyncStyledValueSerialize;
}

function Inserter({ content, asyncStyledValueSerialize }: InserterProps) {
  const hashId = convertHash(content);
  let newContent = content;

  Object.keys(asyncStyledValueSerialize).forEach((key) => {
    const asKey = key as keyof typeof asyncStyledValueSerialize;

    const promise = asyncStyledValueSerialize[asKey];

    promise?.then((styledValue) => {
      if (!styledValue) return;

      newContent = newContent
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

  // eslint-disable-next-line react/no-danger
  return <style id={`min-ui-style-${hashId}`} dangerouslySetInnerHTML={{ __html: newContent }} />;
}

export default Inserter;
