import React from "react";
import FillButton from './FillButton'
import OutlineButton from './OutlineButton'
import GhostButton from './GhostButton'

const Button = ({ variant, size, children }) => {
  if (variant === "ghost") {
    return <GhostButton size={size}>{children}</GhostButton>
  } else if (variant === "outline") {
    return <OutlineButton size={size}>{children}</OutlineButton>
  }

  return <FillButton size={size}>{children}</FillButton>
};

export default Button;
