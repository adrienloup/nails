import { DebugComponent } from '@/src/pages/game/components/debug/Debug.component.tsx';
import { DashboardComponent } from '@/src/pages/game/components/dashboard/Dashboard.component.tsx';
import styles from '@/src/pages/game/components/core/Core.module.scss';

function CoreComponent() {
  return (
    <article className={styles.core}>
      <DebugComponent />
      <DashboardComponent />
    </article>
  );
}

export default CoreComponent;
