import BurgerButtonStyles from './styles';

const BurgerButton = ({ isExpanded, toggleMenu }) => (
  <BurgerButtonStyles
    aria-label="Menu"
    className={isExpanded ? 'burger-button--active' : null}
    onClick={toggleMenu}
    type="button"
  >
    <span className="burger-button__box">
      <span className="burger-button__inner" />
    </span>
  </BurgerButtonStyles>
);

export default BurgerButton;