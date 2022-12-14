import styled, { css } from 'styled-components';

const Button = styled.button`
  ${({ theme }) => {
    return css`
      width: 100%;
      background-color: ${theme.colors.mainColor};
      color: #ffffff;
      padding: 13px 0;
      border: none;
      border-radius: 44px;
      margin-bottom: 20px;
      &:disabled {
        background-color: ${theme.colors.mainDisabled};
      }
    `;
  }}
`;

export default Button;
