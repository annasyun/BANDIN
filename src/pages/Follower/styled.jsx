import styled, { css } from 'styled-components';

export const FollowerTopSpan = styled.span`
  ${({ theme }) => {
    return css`
      position: fixed;
      top: 18px;
      left: 48px;
      font-size: ${theme.fontSizes.md};
      font-weight: 500;
      z-index: 100;
    `;
  }}
`;

export const FollowerMain = styled.main`
  padding: 0 16px;
  margin-top: 72px;
`;

export const FollowerMainUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const FollowerBtn = styled.button`
  ${({ theme }) => {
    return css`
      display: inline-block;
      float: right;
      cursor: pointer;
      &:active{
        background-color: '#fff';
        color: ${theme.colors.grey76};
      }
      background-color: &{theme.colors.mainColor};
    `;
  }}
`;
