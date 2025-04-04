import { Badge } from '@/src/generic/common/components/badge/Badge.type.ts';

export const BadgeComponent = ({ children, className, max = 9, value = 0 }: Badge) => {
  const valueMax = value <= max ? `${value}` : `${max}+`;

  return (
    <span className={className}>
      {children}
      {valueMax}
    </span>
  );
};
