/* eslint-disable */

import { useEffect } from 'react';
import TabMenu from '../../components/CommonUI/TabMenu/TabMenu';

const { kakao } = window;

const SearchMusicHall = () => {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };
    const map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <>
      <div
        id='map'
        style={{ width: '100%', height: '100vh', zIndex: -10 }}
      ></div>
      <TabMenu place='searchmusichall' />
    </>
  );
};

export default SearchMusicHall;
