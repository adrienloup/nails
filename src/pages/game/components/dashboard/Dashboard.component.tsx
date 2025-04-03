import { useTranslation } from 'react-i18next';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import styles from '@/src/pages/game/components/dashboard/Dashboard.module.scss';

export const DashboardComponent = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.dashboard}>
      <TitleComponent>{t('game.title1')}</TitleComponent>
      <TitleComponent tag="h2">{t('game.title2')}</TitleComponent>
    </div>
  );
};
