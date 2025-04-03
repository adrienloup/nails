import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { fallback } from '@/src/generic/utils/fallback.ts';
import { useTitle } from '@/src/generic/hooks/useTitle.ts';
import { LoaderComponent } from '@/src/generic/common/components/loader/Loader.component.tsx';
import { LayoutComponent } from '@/src/generic/common/components/layout/Layout.component.tsx';

const IntroductionComponent = lazy(() =>
  fallback(import('@/src/pages/game/components/introduction/Introduction.component.tsx'), 15e2)
);

function GamePage() {
  const { t } = useTranslation();

  useTitle(t('game.titlePage'));

  return (
    <Suspense
      fallback={
        <LoaderComponent
          aria-label={t('common.loading')}
          duration={1e3}
        />
      }
    >
      <LayoutComponent>
        <IntroductionComponent />
      </LayoutComponent>
    </Suspense>
  );
}

export default GamePage;
