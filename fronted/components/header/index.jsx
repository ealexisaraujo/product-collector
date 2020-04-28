import Link from '../link';
import Logo from '../logo';

import styles from './Header.module.styl';

const Header = () => (
  <header>
    <Logo />
    <nav>
      <ul>
        <li>
          <Link href='/team' activeClassName={styles.active}>
            <a>Team</a>
          </Link>
        </li>
        <li>
          <a
            href='https://github.com/omarefg/product-collector'
            target='_blank'
          >
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
