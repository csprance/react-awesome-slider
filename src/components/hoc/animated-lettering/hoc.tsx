import * as React from 'react';

export default function LetteringHoc(WrappedComponent) {
  return class extends React.Component {
    static propTypes = {
      screens: PropTypes.array.isRequired,
    };

    renderScreens() {
      return this.props.screens.map((screen, index) => (
        <div
          key={`${this.props.name}-screen-${index}`}
          style={{
            backgroundColor: screen.backgroundColor,
          }}
        >
          {screen.children.map((text, tIndex) => <p key={`${this.props.name}${index}-text-${tIndex}`}>{text}</p>)}
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
