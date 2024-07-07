import React from 'react';

type MyProps = {
  // using `interface` is also ok
  message: string;
};

type MyState = {
  clicked: boolean; // like this
};

export class ErrorButton extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(() => ({
      clicked: true,
    }));
  }

  render() {
    if (this.state.clicked) {
      // Simulate a JS error
      throw new Error('I just clicked and it disappeared 😭😭😭');
    }
    return <button onClick={this.handleClick}> {this.props.message} </button>;
  }
}
