import React from "react";
import { SmallOutlineButton, MediumOutlineButton, LargeOutlineButton } from './button-styles'

const OutlineButton = ({ size, children }) => {
  if (size === "small") {
    return <SmallOutlineButton>{children}</SmallOutlineButton>;
  } else if (size === "large") {
    return <LargeOutlineButton>{children}</LargeOutlineButton>;
  }

  return <MediumOutlineButton>{children}</MediumOutlineButton>
};

export default OutlineButton
