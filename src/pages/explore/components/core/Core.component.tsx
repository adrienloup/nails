import { useTranslation } from 'react-i18next';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import styles from '@/src/pages/explore/components/core/Core.module.scss';

function CoreComponent() {
  const { t } = useTranslation();

  return (
    <article className={styles.core}>
      <TitleComponent>{t('explore.title')}</TitleComponent>
    </article>
  );
}

export default CoreComponent;
