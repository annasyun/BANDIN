import { Link } from 'react-router-dom';

import {
  TabMenuSection,
  TabMenuInner,
  TabMenuEachInner,
  EachTabImg,
  EachTabSpan,
} from './styled';

import homeTab from '../../../assets/icon-home.png';
import messageTab from '../../../assets/icon-message-circle.png';
import editTab from '../../../assets/icon-edit.png';
import userTab from '../../../assets/icon-user.png';
import homeTabFill from '../../../assets/icon-home-fill.png';
import messageTabFill from '../../../assets/icon-message-circle-fill.png';
import userTabFill from '../../../assets/icon-user-fill.png';

const TabMenu = ({ place }) => {
  return (
    <TabMenuSection>
      <h1 className='ir'>하단 탭 메뉴바</h1>
      <TabMenuInner>
        <TabMenuEachInner>
          {/* 경로 수정 필요 */}
          <Link to='/'>
            {place === 'search' ? (
              <EachTabImg src={homeTabFill} alt='홈 탭메뉴' />
            ) : (
              <EachTabImg src={homeTab} alt='홈 탭메뉴 누른 상태' />
            )}
            <EachTabSpan>홈</EachTabSpan>
          </Link>
        </TabMenuEachInner>
        <TabMenuEachInner>
          <Link to='/'>
            {place === 'chat' ? (
              <EachTabImg src={messageTabFill} alt='채팅 탭메뉴' />
            ) : (
              <EachTabImg src={messageTab} alt='채팅 탭메뉴 누른 상태' />
            )}
            <EachTabSpan>채팅</EachTabSpan>
          </Link>
        </TabMenuEachInner>
        <TabMenuEachInner>
          <Link to='/'>
            <EachTabImg src={editTab} alt='게시물 탭메뉴' />
            <EachTabSpan>게시물 작성</EachTabSpan>
          </Link>
        </TabMenuEachInner>
        <TabMenuEachInner>
          <Link to='/'>
            {place === 'profile' ? (
              <EachTabImg src={userTabFill} alt='프로필 탭메뉴' />
            ) : (
              <EachTabImg src={userTab} alt='프로필 탭메뉴 누른 상태' />
            )}
            <EachTabSpan>프로필</EachTabSpan>
          </Link>
        </TabMenuEachInner>
      </TabMenuInner>
    </TabMenuSection>
  );
};

export default TabMenu;
