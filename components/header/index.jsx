import Link from 'next/link';
import { useState } from 'react';
import BurgerButton from '../burger-button';
import Container from '../container';
import HeaderStyles from './styles';
import InstagramIcon from '../svgs/instagram';

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    const body = document.querySelector('body');

    if (!menuIsOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }

    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <HeaderStyles>
      <Container>
        <Link href="/" passHref>
          <a className="header__logo">Battered Baggage</a>
        </Link>
        <BurgerButton isExpanded={menuIsOpen} toggleMenu={toggleMenu} />
        <nav className={menuIsOpen ? 'header__nav--is-open' : null}>
          <ul>
            <li>
              <Link href="/posts" passHref>
                <a passHref>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                <a>Contact Me</a>
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com/batteredbaggage" passHref>
                <a className="header__social-icon" target="_blank" rel="noreferrer">
                  <InstagramIcon />
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </HeaderStyles>
  );
};

export default Header;
