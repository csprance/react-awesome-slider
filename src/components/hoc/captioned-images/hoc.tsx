import * as React from 'react';

import Styles from './styles.scss';

export default function CaptionedHoc(WrappedComponent) {
  return class extends React.Component {
    static propTypes = {
      screens: PropTypes.array.isRequired,
    };

    renderScreens() {
      return this.props.screens.map((screen, index) => (
        <div
          key={`${this.props.name}-screen-${index}`}
          data-src={screen.media}
          style={{
            backgroundColor: screen.backgroundColor,
          }}
        >
          <div className={Styles.caption}>
            <p>{screen.caption}</p>
          </div>
        </div>
      ));
    }

    render() {
      return (
        <WrappedComponent {...this.props}>
          {this.renderScreens()}
        </WrappedComponent>
      );
    }
  };
}
