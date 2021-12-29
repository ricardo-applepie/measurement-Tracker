import React from "react";
import "./button.scss";

interface ButtonProps {
  buttonText: string;
}

interface ButtonState {}

// A reusable button component which recieves props .
class SimpleButton extends React.Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div>
        <button className="button" color="primary">
          {this.props.buttonText}
        </button>
      </div>
    );
  }
}

export default SimpleButton;
