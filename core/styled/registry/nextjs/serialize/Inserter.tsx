import { PropsWithChildren } from 'react';

import { useServerInsertedHTML } from 'next/navigation';

interface InserterProps {
  styles: string[];
}

function Inserter({ children, styles }: PropsWithChildren<InserterProps>) {
  useServerInsertedHTML(() => {
    if (!styles || !styles.length) return null;
    return <style id="built-in-style">{styles.join('\n')}</style>;
  });

  return children;
}

export default Inserter;
