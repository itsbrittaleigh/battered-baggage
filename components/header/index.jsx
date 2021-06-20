import Link from 'next/link';
import HeaderStyles from './styles';

const Header = () => (
  <HeaderStyles>
    <Link href="/">
      <a>Blog</a>
    </Link>
  </HeaderStyles>
);

export default Header;
