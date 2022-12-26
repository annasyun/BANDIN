import styled, { css } from 'styled-components';
import VerticalBg from '../../../assets/icon-more-vertical.png';
import LikeBg from '../../../assets/icon-heart.png';
import ChatBg from '../../../assets/icon-message-circle.png';

export const CommonPostWrap = styled.div`
  width: 358px;
  display: flex;
  position: relative;
  flex-direction: column;

  .img-profile {
    width: 42px;
    height: 42px;
  }
`;

export const CommonPostSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4px 0 0 12px;

  > img {
    width: 304px;
    height: 228px;
  }
`;

export const UserName = styled.h1`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.md};
      line-height: 18px;
      text-decoration: none;
    `;
  }}
`;

export const UserInfoCont = styled.div`
  display: flex;
  flex-direction: row;
`;

// eslint-disable-next-line no-undef
export const CommonUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  padding-top: 4px;
`;

export const VerticalBtn = styled.button`
  width: 18px;
  height: 18px;
  border: 0;
  outline: 0;
  margin-left: auto;
  background: url(${VerticalBg}) no-repeat;
  background-size: 18px 18px;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 4px;
`;

export const UserID = styled.p`
  ${({ theme }) => {
    return css`
      margin-top: 2px;
      line-height: 14px;
      font-size: ${theme.fontSizes.sm};
      color: ${theme.colors.grey76};
    `;
  }}
`;

export const PostTxt = styled.p`
  ${({ theme }) => {
    return css`
      margin: 16px 0;
      line-height: 18px;
      font-size: ${theme.fontSizes.md};
    `;
  }}
`;

export const IconGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin: 12px 0 16px 0;

  > button {
    outline: none;
    border: 0;
    background: none;
    display: flex;
    align-items: center;
  }
`;

export const LikeBtnStyle = styled.button`
  width: 20px;
  height: 20px;
  border: 0;
  outline: 0;
  background: url(${LikeBg}) no-repeat;
  background-size: 20px 20px;
  cursor: pointer;
`;

export const LikeCount = styled.p`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.sm};
      color: ${theme.colors.grey76};
      line-height: 12px;
      text-align: center;
      padding: 4px 16px 0 6px;
    `;
  }}
`;

export const ChatBtn = styled.div`
  width: 20px;
  height: 20px;
  border: 0;
  outline: 0;
  background: url(${ChatBg}) no-repeat;
  background-size: 20px 20px;
  cursor: pointer;
`;

export const ChatCount = styled.p`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.sm};
      color: ${theme.colors.grey76};
      padding-left: 6px;
    `;
  }}
`;

export const PostUploadTime = styled.p`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.xs};
      color: ${theme.colors.grey76};
      margin-bottom: 4px;
    `;
  }}
`;
