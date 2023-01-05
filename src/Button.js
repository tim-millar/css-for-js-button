import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

const Button = ({ variant, size, children }) => {
  return <DefaultButton>{children}</DefaultButton>;
};

const { primary, primaryLight, white } = COLORS;

const DefaultButton = styled.button`
  font-size: 18px;
  font-family: "Roboto";
  line-height: 40px;
  text-transform: uppercase;
  background-color: ${primary};
  color: ${white};
  border-radius: 4px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  &:hover {
    background-color: ${primaryLight};
  }
`;

export default Button;
