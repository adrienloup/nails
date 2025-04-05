import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from '@/src/pages/game/components/debug/Debug.module.scss';

export const DebugComponent = () => {
  console.log('DebugComponent');
  const location = useLocation();
  const [count, setCount] = useState(0);

  const display = useMemo(() => {
    const isDebug = location.search == '?debug';
    if (isDebug) {
      window.localStorage.setItem('_debug_3mma_0', '1');
    } else {
      window.localStorage.removeItem('_debug_3mma_0');
    }
    return isDebug;
  }, [location.search]);

  return display ? (
    <div
      className={styles.debug}
      role="complementary"
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
      was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
      passages, and more recently with desktop publishing software like Aldus PageMaker including
      versions of Lorem Ipsum.
      <button onClick={() => setCount((prev: number) => prev + 1)}>{count}</button>
    </div>
  ) : null;
};
