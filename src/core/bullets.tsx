import * as React from 'react';

import { getClassName } from '../helpers/components';

interface Props {
  rootElement: string;
  media: any[];
  onClick: ({ index, direction }: { index: any; direction: any }) => void;

  cssModule?: any;
  selected?: number;
}
const Bullets: React.FunctionComponent<Props> = ({
  rootElement,
  onClick,
  media,
  cssModule = null,
  selected = 0,
}) => {
  const bulletClick = (event: any) => {
    const button = event.currentTarget;
    button.classList.add(
      getClassName(`${rootElement}__bullets--loading`, cssModule)
    );
    const index = parseInt(button.getAttribute('data-index'), 10);
    const direction = !(selected > index);
    onClick({ index, direction });
  };

  const renderBullets = () => {
    return media.map((item, index) => {
      const className =
        index === selected
          ? getClassName(`${rootElement}__bullets--active`, cssModule)
          : null;
      return (
        <button
          key={`bullet-${index}`}
          data-index={index}
          onClick={bulletClick}
          className={className}
        >
          {index}
        </button>
      );
    });
  };

  return (
    <nav className={getClassName(`${rootElement}__bullets`, cssModule)}>
      {renderBullets()}
    </nav>
  );
};

export default Bullets;