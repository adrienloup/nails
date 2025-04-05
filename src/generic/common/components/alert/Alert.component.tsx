import { CSSProperties, useEffect, useRef, useState } from 'react';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { IconComponent } from '@/src/generic/common/components/icon/Icon.component.tsx';
import { Alert } from '@/src/generic/common/components/alert/Alert.type.tsx';
import styles from '@/src/generic/common/components/alert/Alert.module.scss';
import { classNames } from '@/src/generic/utils/classNames.ts';

export const AlertComponent = ({
  title,
  text,
  status = 'info',
  timeout = 5,
  close = false,
  remove,
}: Alert) => {
  const outTimer = useRef(0);
  const removeTimer = useRef(0);
  const [out, setOut] = useState(false);

  const getStyle = (timeout: number) => ({ '--timeout': timeout }) as CSSProperties;

  useEffect(() => {
    if (timeout > 0) {
      outTimer.current = setTimeout(() => {
        setOut(true);
      }, timeout * 1e3) as unknown as number;
      removeTimer.current = setTimeout(
        () => {
          remove!();
        },
        timeout * 1e3 + 150
      ) as unknown as number;
    }
    return () => {
      clearTimeout(outTimer.current);
      clearTimeout(removeTimer.current);
    };
  }, []);

  return (
    <div
      role="alert"
      // className={[
      //   styles.alert,
      //   ` ${styles[status]}`,
      //   timeout > 0 ? ` ${styles.animate}` : '',
      //   out ? ` ${styles.out}` : '',
      // ].join('')}
      className={classNames([
        styles.alert,
        styles[status],
        timeout > 0 ? styles.animate : '',
        out ? styles.out : '',
      ])}
      style={getStyle(timeout)}
      // style={
      //   {
      //     '--timeout': `${timeout}ms`,
      //   } as CSSProperties
      // }
    >
      <div className={styles.content}>
        {title && <span className={styles.title}>{title}</span>}
        <p className={styles.text}>{text}</p>
      </div>
      {close && (
        <ButtonComponent
          className={styles.close}
          onClick={remove}
        >
          <IconComponent icon="close" />
        </ButtonComponent>
      )}
      {timeout > 0 ? (
        <div
          className={styles.progress}
          style={getStyle(timeout)}
          // {
          //   '--timeout': `${timeout}s`,
          // } as CSSProperties
        ></div>
      ) : null}
    </div>
  );
};
