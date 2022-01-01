import React from "react";
import { ButtonIconProps } from "./iconTypes";

// Resuable Icons
function ButtonIcon(props: ButtonIconProps) {
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

export default ButtonIcon;
