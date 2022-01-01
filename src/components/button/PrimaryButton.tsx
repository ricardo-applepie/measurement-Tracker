import React from "react";
import { ButtonProps, ButtonState } from "./primaryButtonTypes";

// Reusable button component which recieves props from any parent component.
class PrimaryButton extends React.Component<ButtonProps, ButtonState> {
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

export default PrimaryButton;
