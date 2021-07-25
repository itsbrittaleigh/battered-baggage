import styled from 'styled-components';

const BurgerButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: inline-block;
  margin: 0;
  overflow: visible;
  padding: 0;
  position: relative;
  transition-duration: 0.15s;
  transition-property: color, opacity;
  transition-timing-function: ease-out;
  /* z-index: 100; */

  @media only screen and (min-width: 600px) {
    display: none;
  }

  .burger-button__inner,
  .burger-button__inner:before,
  .burger-button__inner:after {
    background-color: var(--dark-green);
    border-radius: 2px;
    height: 2px;
    position: absolute;
    transition-duration: 0.15s;
    transition-property: transform;
    transition-timing-function: ease-out;
    width: 21px;
  }

  .burger-button__inner {
    display: block;
    margin-top: --2px;
    top: 50%;
    transition-duration: 0.075s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .burger-button__inner:before,
  .burger-button__inner:after {
    background-color: inherit;
    content: "";
    display: block;
  }

  .burger-button__inner:after {
    bottom: -6px;
    transition: bottom 0.075s 0.12s ease,
      transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .burger-button__inner:before {
    top: -6px;
    transition: opacity 0.075s ease, top 0.075s 0.12s ease;
  }

  .burger-button__box {
    display: inline-block;
    height: 17px;
    position: relative;
    width: 28px;
  }

  &.burger-button--active .burger-button__inner {
    transform: rotate(45deg);
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  &.burger-button--active .burger-button__inner:before {
    opacity: 0;
    top: 0;
    transition: opacity 0.075s 0.12s ease, top 0.075s ease;
  }

  &.burger-button--active .burger-button__inner:after {
    bottom: 0;
    transform: rotate(-90deg);
    transition: bottom 0.075s ease,
      transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;

export default BurgerButton;
