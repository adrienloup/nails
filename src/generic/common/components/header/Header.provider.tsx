import { useCallback } from 'react';
import { useLocalStorage } from '@/src/generic/hooks/useLocalStorage.ts';
import { HeaderContext } from '@/src/generic/common/components/header/Header.context.ts';
import { Children } from '@/src/generic/types/Children.type.ts';

export function HeaderProvider({ children }: { children: Children }) {
  const [header, setHeader] = useLocalStorage<boolean>('_header_3mma_0', false);
  const onchange = useCallback((open: boolean) => setHeader(open), []);

  return <HeaderContext.Provider value={[header, onchange]}>{children}</HeaderContext.Provider>;
}
