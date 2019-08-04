import { createGlobalStyle } from 'styled-components';

const rootElement = 'aws-sld';
const cos45 = 0.7071;
const transitionBezier = '-cubic-bezier(0-5,-0-075,-0-25,-0.95)';
const sliderHeightPercentage = '60%';
const sliderTransitionDuration = '575ms';
const organicArrowColor = '#6a6a6a';
const organicArrowThickness = '4px';
const organicArrowHeight = '40px';
const organicArrowBorderRadius = '0';
const controlButtonWidth = '10%';
const controlButtonHeight = '25%';
const controlButtonOpacity = '0.5';
const controlButtonHoverOpacity = '0.75';
const controlButtonBackground = 'transparent';
const loaderBarColor = '#851515';
const loaderBarHeight = '6px';
const controlBulletColor = '#6a6a6a';
const controlBulletActiveColor = '#6a6a6a';
const contentBackgroundColor = '#2f2f2f';

const fillParent = `
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
const clearSpacing = `
  padding: 0;
  margin: 0;
`;
const clearFocus = `
  outline-color: 0;
  outline-style: none;
  outline-width: 0;
`;
const clearSelection = `
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
`;

export const AwesomeStyles = createGlobalStyle`
.fill-parent {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.clear-spacing {
  padding: 0;
  margin: 0;
}

.clear-focus {
  outline: 0 none 0;
}

.clear-selection {
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.${rootElement} {
  --organic-arrow-thickness: ${organicArrowThickness};
  --organic-arrow-height: ${organicArrowHeight};
  --slider-height-percentage: ${sliderHeightPercentage};
  --loader-bar-color: ${loaderBarColor};
  --loader-bar-height: ${loaderBarHeight};
  --control-button-width: ${controlButtonWidth};
  --control-button-height: ${controlButtonHeight};
  --control-button-opacity: ${controlButtonOpacity};
  --control-button-hover-opacity: ${controlButtonHoverOpacity};
  --control-button-background: ${controlButtonBackground};
  --transition-bezier: ${transitionBezier};
  --slider-transition-duration: ${sliderTransitionDuration};
  --organic-arrow-color: ${organicArrowColor};
  --organic-arrow-border-radius: ${organicArrowBorderRadius};
  --control-bullet-color: ${controlBulletColor};
  --control-bullet-active-color: ${controlBulletActiveColor};
  --content-background-color: ${contentBackgroundColor};
}

.${rootElement} {
  display: block;
  position: relative;
  width: 100%;
  max-width: 100%;

  &__wrapper {
    display: block;
    overflow: hidden;
    position: relative;
    height: 100%;
    width: 100%;
  }
  &__container {
    display: block;
    width: 100%;
    height: 0;
    padding-bottom: var(--slider-height-percentage);

    @media all and (max-width: 500px) {
      padding-bottom: calc(var(--slider-height-percentage) * 1.25);
    }

    figure {
      ${fillParent};
    }
  }
  &__startUp {
    background-color: red;
    height: 100%;
    width: 100%;

    > div {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      width: 35%;
      height: auto;
    }
  }
  &__content {
    ${fillParent};
    background-color: var(--content-background-color);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    > img,
    > video {
      object-fit: cover;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    &--enter {
    }
    &--exit {
    }
  }
  &__controls {
    button {
      ${clearFocus};
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--control-button-width);
      height: var(--control-button-height);
      position: absolute;
      z-index: 10;
      top: calc(50% - (0.5 * var(--control-button-height)));
      border: none;
      background-color: var(--control-button-background);
      color: #fff;
      cursor: pointer;
      .${rootElement}__controls__arrow-left,
      .${rootElement}__controls__arrow-right {
        opacity: var(--control-button-opacity);
      }
      &:hover {
        .${rootElement}__controls__arrow-left,
        .${rootElement}__controls__arrow-right {
          opacity: var(--control-button-opacity-hover);
        }
      }
    }
    &--active {
      .${rootElement}__controls__arrow-left {
        opacity: var(--control-button-opacity-hover);
        transform: translate3d(-100%, 0, 0);
      }
      .${rootElement}__controls__arrow-right {
        opacity: var(--control-button-opacity-hover);
        transform: translate3d(100%, 0, 0);
      }
    }
    @media all and (max-width: 520px) {
      visibility: hidden;
    }
  }
  &__bar {
    display: block;
    width: 100%;
    height: var(--loader-bar-height);
    background-color: var(--loader-bar-color);
    position: absolute;
    top: 0;
    left: 0;
    // z-index: 1;
    transition: transform 3000ms var(--transition-bezier);
    transform: translate3d(-100%, 0, 0);
    &--active {
      transform: translate3d(-20%, 0, 0);
    }
    &--end {
      transition-duration: 300ms;
      transform: translate3d(0, 0, 0);
    }
  }
  &__next {
    right: 0;
  }
  &__prev {
    left: 0;
  }
  &__box {
    z-index: 1;
    ${fillParent};
  }
  &--animated {
    will-change: transform;
    transition: transform var(--slider-transition-duration)
      var(--transition-bezier);
  }
  &--animated-mobile {
    will-change: transform;
    transition: transform 325ms cubic-bezier(0.15, 0.65, 0.1, 1);
  }
  &--active {
    z-index: 2;
    transform: translate3d(0, 0, 0);
  }
  &--moveRight {
    transform: translate3d(100%, 0, 0);
  }
  &--moveLeft {
    transform: translate3d(-100%, 0, 0);
  }
  &--exit {
    z-index: 0;
  }
  &--first {
    .${rootElement}__prev {
      visibility: hidden;
    }
  }
  &--last {
    .${rootElement}__next {
      visibility: hidden;
    }
  }
  &--fill-parent {
    position: absolute !important;
    width: 100% !important;
    height: 100% !important;
    top: 0;
    left: 0;

    .${rootElement}__container {
      height: 100%;
      padding: 0;
    }
  }
  &__bullets {
    position: absolute;
    bottom: -40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      ${clearFocus};
      padding: 0;
      display: block;
      width: 16px;
      height: 16px;
      margin: 5px;
      border-radius: 50%;
      background: var(--control-bullet-color);
      text-indent: -9999px;
      overflow: hidden;
      cursor: pointer;
      border: none;
      transition: transform 0.225s cubic-bezier(0.8, 1.35, 0.75, 1.45),
        background-color 0.175s ease-out;

      &:hover {
        transform: scale(1.2);
      }
    }
    .${rootElement}__bullets--loading {
      transform: scale(1.2);
    }
    .${rootElement}__bullets--active {
      transform: scale(1.5);
      background: var(--control-bullet-active-color);

      &:hover {
        transform: scale(1.5);
      }
    }
  }

  &__controls__arrow-left,
  &__controls__arrow-right {
    width: 100%;
    height: var(--organic-arrow-height);
    position: relative;
    display: block;
    transition: transform 0.2s ease-out 0.125s, opacity 0.2s ease-out;
    &:before,
    &:after {
      content: ' ';
      position: absolute;
      right: calc(
        50% -
          (
            ${cos45} * (var(--organic-arrow-height) +
                  var(--organic-arrow-thickness))
          ) / 2
      );
      height: 100%;
      border-radius: var(--organic-arrow-border-radius);
      width: var(--organic-arrow-thickness);
      background-color: var(--organic-arrow-color);
      transition: transform 0.15s ease-out, background-color 0.15s ease-out;
    }
    &:before {
      transform-origin: 100% 100% 0;
      // background-color: rgba(76, 177, 6, 0.75);
      top: -50%;
      transform: rotate(-45deg);
    }
    &:after {
      transform-origin: 100% 0% 0;
      // background-color: rgba(255, 247, 43, 0.75);
      top: 50%;
      transform: rotate(45deg);
    }
  }
  &__controls__arrow-right {
    &--active {
      transform: translate3d(100%, 0, 0);
      &:after {
        transform: rotate(90deg) translate3d(50%, 0, 0) !important;
      }
      &:before {
        transform: rotate(-90deg) translate3d(50%, 0, 0) !important;
      }
    }
  }
  &__controls__arrow-left {
    &:before,
    &:after {
      right: auto;
      left: calc(
        50% -
          (
            ${cos45} * (var(--organic-arrow-height) +
                  var(--organic-arrow-thickness))
          ) / 2
      );
    }
    &:before {
      transform-origin: 0 100% 0;
      top: -50%;
      transform: rotate(45deg);
    }
    &:after {
      transform-origin: 0 0 0;
      top: 50%;
      transform: rotate(-45deg);
    }
    &--active {
      transform: translate3d(-100%, 0, 0);
      &:after {
        transform: rotate(-90deg) translate3d(-50%, 0, 0) !important;
      }
      &:before {
        transform: rotate(90deg) translate3d(-50%, 0, 0) !important;
      }
    }
  }
  &__controls {
    button:hover {
      .${rootElement}__controls__arrow-left {
        &:before {
          opacity: 1;
          transform: rotate(30deg);
        }

        &:after {
          opacity: 1;
          transform: rotate(-30deg);
        }
      }
      .${rootElement}__controls__arrow-right {
        &:before {
          opacity: 1;
          transform: rotate(-30deg);
        }
        &:after {
          opacity: 1;
          transform: rotate(30deg);
        }
      }
    }
  }
}
`;
