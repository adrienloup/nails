import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';

export const ProductionPerSecondComponent = () => {
  return (
    <DialsComponent>
      <DialComponent
        value={10}
        notation="compact"
        label="nails per second"
      />
    </DialsComponent>
  );
};
