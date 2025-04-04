import { classNames } from '@/src/generic/utils/classNames.ts';
import { Badge } from '@/src/generic/common/components/badge/Badge.type.ts';
import styles from '@/src/generic/common/components/badge/Badge.module.scss';

export const BadgeComponent = ({ children, className, max = 9, value = 0 }: Badge) => {
  const valueMax = value > max ? `${max}+` : `${value}`;

  return (
    <span className={classNames([styles.badge, className])}>
      {children}
      {value > 0 && <span className={styles.value}>{valueMax}</span>}
    </span>
  );
};
