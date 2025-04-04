import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { ClickerComponent } from '@/src/generic/common/components/clicker/Clicker.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const ArtisanalComponent = () => {
  return (
    <DialsComponent>
      <DialComponent
        value={1000000000000000000}
        notation="compact"
        label="total nails"
      />
      <ClickerComponent
        className={styles.button}
        onClick={() => console.log('ok')}
      >
        +1
        {/*Nails*/}
        {/*<span>+1</span>*/}
      </ClickerComponent>
    </DialsComponent>
  );
};
