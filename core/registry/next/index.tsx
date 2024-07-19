import { PropsWithChildren } from 'react';

import RegistryClient from './Client';
import RegistryServer from './Server';

function NextRegistry({ children }: PropsWithChildren) {
  return (
    <RegistryServer>
      <RegistryClient>{children}</RegistryClient>
    </RegistryServer>
  );
}

export default NextRegistry;
