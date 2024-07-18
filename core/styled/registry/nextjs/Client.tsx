import { PropsWithChildren } from 'react';

import cache from '@core/styled/cache';

import Inserter from './serialize/Inserter';

function RegistryClient({ children }: PropsWithChildren) {
  const styles = cache();

  return <Inserter styles={styles || []}>{children}</Inserter>;
}

export default RegistryClient;
