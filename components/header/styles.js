import styled from 'styled-components';

const Header = styled.header`
  padding: 24px 0;
  position: relative;

  /* container */
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header__logo {
    font-size: 2rem;
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;
  }

  li {
    margin-right: 24px;
  }

  a:focus {
    outline: 2px solid var(--dark-green);
  }

  .header__social-icon {
    width: 18px;
    height: 18px;
    display: block;
  }

  @media only screen and (max-width: 599px) {
    nav {
      background-color: var(--light-green);
      height: 0;
      left: 0;
      overflow: hidden;
      position: fixed;
      right: 0;
      top: 93px;
      transition: 0.3s ease-in;
      z-index: 100;
    }
    
    .header__nav--is-open {
      border-bottom: 1px solid var(--dark-green);
      height: 311px;
    }

    ul {
      display: block;
    }
    
    a:not(.header__logo) {
      display: block;
      padding: 24px 0;
      text-align: center;
      margin: 0 auto;
    }
  }
`;

export default Header;
