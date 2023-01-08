import React from "react";
import { SmallGhostButton, MediumGhostButton, LargeGhostButton } from './button-styles'

const GhostButton = ({size, children}) => {
  if (size === "small") {
    return <SmallGhostButton>{children}</SmallGhostButton>;
  } else if (size === "large") {
    return <LargeGhostButton>{children}</LargeGhostButton>;
  }

  return <MediumGhostButton>{children}</MediumGhostButton>;
};

export default GhostButton
