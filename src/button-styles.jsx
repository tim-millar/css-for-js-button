import styled, { css } from "styled-components";

import { COLORS } from "./constants";

const {
  primary,
  primaryLight,
  white,
  offwhite,
  gray,
  transparentGray15,
  black
} = COLORS;

const BaseButton = styled.button`
  box-sizing: border-box;
  font-weight: 500;
  font-family: "Roboto";
  font-style: normal;
  text-transform: uppercase;
  background-color: ${primary};
  color: ${white};
  border-radius: 2px;
  border-width: 0px;

  &:hover {
    background-color: ${primaryLight};
  }
`;

export const MediumButton = styled(BaseButton)`
  font-size: 18px;
  line-height: 21px;
  border-radius: 3px;
  padding: 16px 24px;

  &:focus {
    box-shadow: 0 0 0 2.5px ${white}, 0 0 0 4px ${primary};
  }
`;

export const SmallButton = styled(BaseButton)`
  font-size: 16px;
  line-height: 19px;
  border-radius: 2px;
  padding: 8px 16px;

  &:focus {
    box-shadow: 0 0 0 2px ${white}, 0 0 0 3px ${primary};
  }
`;

export const LargeButton = styled(BaseButton)`
  font-size: 21px;
  line-height: 25px;
  border-radius: 4px;
  padding: 20px 36px;

  &:focus {
    box-shadow: 0 0 0 3px ${white}, 0 0 0 5px ${primary};
  }
`;

const ghostStyles = css`
  background-color: hsl(240deg 10% 50% / 0);
  color: ${gray};

  &:hover {
    background-color: ${transparentGray15};
    color: ${black};
  }
`;

export const MediumGhostButton = styled(MediumButton)`
  ${ghostStyles}

  &:focus {
    outline: 4px solid ${gray};
  }
`;

export const SmallGhostButton = styled(SmallButton)`
  ${ghostStyles}

  &:focus {
    outline: 3px solid ${gray};
  }
`;

export const LargeGhostButton = styled(LargeButton)`
  ${ghostStyles}

  &:focus {
    outline: 5px solid ${gray};
  }
`;

const outlineStyles = css`
  background-color: ${white};
  color: ${primary};
  border: 2px solid ${primary};

  &:hover {
    background-color: ${offwhite};
  }
`;

export const MediumOutlineButton = styled(MediumButton)`
  ${outlineStyles}
`;

export const SmallOutlineButton = styled(SmallButton)`
  ${outlineStyles}
`;

export const LargeOutlineButton = styled(LargeButton)`
  ${outlineStyles}
`;

