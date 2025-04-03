import { Link } from 'react-router-dom';
import styles from '@/src/generic/common/components/navigation/Navigation.module.scss';

export const NavigationComponent = () => {
  return (
    <nav
      className={styles.navigation}
      role="navigation"
    >
      <Link to={'/nails'}>Game</Link>
      <br />
      <Link to={'/nails/explore'}>Explore</Link>
    </nav>
  );
};
