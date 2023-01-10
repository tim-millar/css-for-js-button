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
  font-family: "Roboto", sans-serif;
  font-style: normal;
  text-transform: uppercase;
  background-color: ${primary};
  color: ${white};
  border-radius: 2px;
  border 2px solid transparent;

  &:hover {
    background-color: ${primaryLight};
  }
`;

export const MediumButton = styled(BaseButton)`
  font-size: 18px;
  line-height: 21px;
  border-radius: 3px;
  padding: 12px 20px;

  &:focus {
    outline: 1.5px solid ${primary};
    outline-offset: 2.5px;
  }
`;

export const SmallButton = styled(BaseButton)`
  font-size: 16px;
  line-height: 19px;
  border-radius: 2px;
  padding: 4px 12px;

  &:focus {
    outline: 1px solid ${primary};
    outline-offset: 2px;
  }
`;

export const LargeButton = styled(BaseButton)`
  font-size: 21px;
  line-height: 25px;
  border-radius: 4px;
  padding: 16px 32px;

  &:focus {
    outline: 2px solid ${primary};
    outline-offset: 3px;
  }
`;

const ghostStyles = css`
  background-color: transparent;
  color: ${gray};

  &:hover {
    background-color: ${transparentGray15};
    color: ${black};
  }

  &:focus {
    outline-offset: 0;
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

