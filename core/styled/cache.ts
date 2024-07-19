import * as React from 'react';

let serverCache: (() => string[]) | null;

try {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  serverCache = React.cache(() => []);
} catch {
  serverCache = null;
}

let clientContext: React.Context<string[]>;

function getClientCache() {
  if (!clientContext) {
    clientContext = React.createContext<string[]>([]);
  }

  return clientContext;
}

export default function cache() {
  try {
    // eslint-disable-next-line
    return serverCache ? serverCache() : React.useContext(getClientCache());
  } catch {
    // eslint-disable-next-line
    return React.useContext(getClientCache());
  }
}
