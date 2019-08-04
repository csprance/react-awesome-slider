import * as React from 'react';

import { getClassName } from '../helpers/components';

interface Props {
  rootElement: string;
  onMount: ({ element, next, prev }: any) => void;
  onNext: () => void;
  onPrev: () => void;

  cssModule?: any;
  organicArrows?: boolean;
}
const Buttons: React.FunctionComponent<Props> = ({
  rootElement,
  onMount,
  onNext,
  onPrev,
  cssModule = null,
  organicArrows = true,
}) => {
  let controls = React.useRef(null);
  let next = React.useRef(null);
  let prev = React.useRef(null);
  React.useEffect(() => {
    onMount({
      element: controls,
      next,
      prev,
    });
  });

  return (
    <div
      ref={controls}
      className={getClassName(`${rootElement}__controls`, cssModule)}
    >
      <button
        ref={next}
        className={getClassName(`${rootElement}__next`, cssModule)}
        onClick={onNext}
      >
        {organicArrows && (
          <span
            className={getClassName(
              `${rootElement}__controls__arrow-right`,
              cssModule
            )}
          />
        )}
      </button>
      <button
        ref={prev}
        className={getClassName(`${rootElement}__prev`, cssModule)}
        onClick={onPrev}
      >
        {organicArrows && (
          <span
            className={getClassName(
              `${rootElement}__controls__arrow-left`,
              cssModule
            )}
          />
        )}
      </button>
    </div>
  );
};

export default Buttons;
