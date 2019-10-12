import styled from '@emotion/styled';
import { getButtonType, getButtonHoveredType } from './config';

const ButtonComponent = styled.button`
  &:active,
  &:visited {
    outline: none;
    box-shadow: none;
  }

  font-size: 16px;
  font-family: 'Lato';
  cursor: pointer;
  text-align: center;
  padding: 8px 32px;
  line-height: 2;
  border-radius: 8px;
  border: solid 1px #1E88E5;
  transition: 0.3s all cubic-bezier(0.785, 0.135, 0.15, 0.86);

  ${getButtonType}

  &:hover,
  &:focus {
    ${getButtonHoveredType}
  }
`;

export default ButtonComponent;