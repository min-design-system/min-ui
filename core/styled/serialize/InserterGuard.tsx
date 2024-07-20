import { PropsWithChildren, useState, useLayoutEffect } from 'react';

function InserterGuard({ children }: PropsWithChildren) {
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  if (isMounted) return null;

  return children;
}

export default InserterGuard;
