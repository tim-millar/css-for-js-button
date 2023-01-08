import React from "react";
import { SmallButton, MediumButton, LargeButton } from './button-styles'

const FillButton = ({ size, children }) => {
  if (size === "small") {
    return <SmallButton>{children}</SmallButton>;
  }
  else if (size === "large") {
    return <LargeButton>{children}</LargeButton>;
  }
  return <MediumButton>{children}</MediumButton>;
};

export default FillButton
