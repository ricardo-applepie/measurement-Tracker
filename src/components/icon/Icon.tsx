import React from "react";

interface IconProps {
  iconType: string;
}

function IconButtons(props: IconProps) {
  switch (props.iconType) {
    case "delete":
      return (
        <div>
          <svg data-testid="DeleteIcon"></svg>
        </div>
      );
      break;

    default:
      return (
        <div>
          <svg data-testid="DeleteIcon"></svg>
        </div>
      );
      break;
  }
}

export default IconButtons;
