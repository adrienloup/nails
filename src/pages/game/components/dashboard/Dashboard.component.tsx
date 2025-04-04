import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useInterval } from '@/src/generic/hooks/useInterval.ts';
import { ManufacturingComponent } from '@/src/pages/game/components/dashboard/manufacturing/Manufacturing.component.tsx';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import styles from '@/src/pages/game/components/dashboard/Dashboard.module.scss';
import { CardComponent } from '@/src/generic/common/components/card/Card.component.tsx';

export const DashboardComponent = () => {
  const { t } = useTranslation();

  const sellClips = useCallback(() => {
    console.log('sellClips');
  }, []);

  useInterval(sellClips, 5e2);

  return (
    <article
      className={styles.dashboard}
      role="article"
    >
      <ManufacturingComponent />
      <CardComponent>
        <TitleComponent>{t('game.title1')}</TitleComponent>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </CardComponent>
      <CardComponent>
        <TitleComponent tag="h2">{t('game.title2')}</TitleComponent>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </CardComponent>
      <CardComponent>
        <TitleComponent tag="h2">{t('game.title2')}</TitleComponent>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </CardComponent>
    </article>
  );
};
