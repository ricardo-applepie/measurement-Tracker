import React from "react";
// icon types
import { ButtonIconProps } from "./iconTypes";

// Resuable Icon component.
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
