import { useState, useEffect } from 'react';

import TabMenu from '../../components/CommonUI/TabMenu/TabMenu';
import TopSearchNav from '../../components/CommonUI/Nav/TopSearchNav/TopSearchNav';
import NoneProfileImg from '../../assets/profile.png';
import { UserUl, SearchMain } from './styled';
import getSearchUser from '../../api/searchuser/getSearchUser';
import UserItem from '../../components/CommonUI/UserItem/UserItem';

const Search = () => {
  const [userInput, setUserInput] = useState(null);
  const [userArr, setUserArr] = useState([]);

  const search = () => {
    if (userInput) {
      getSearchUser(userInput)
        .then((data) => {
          setUserArr(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    // 처음에 마운트 될 때 실행 된다. (리턴문 제외하고 실행)
    const newTimer = setTimeout(() => {
      search();
    }, 400);

    // 원래 디바운싱 전에 실행했던 코드
    // if (userInput) {
    //   getSearchUser(userInput)
    //     .then((data) => {
    //       setUserArr(data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }

    // 마운트 제외하고 그 다음부터 인풋창 변경되서 실행될 때는 리턴문 먼저 실행
    return () => {
      clearTimeout(newTimer);
    };
  }, [userInput]);

  const getInput = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <>
      <TopSearchNav onChangeGetInput={getInput} />
      <SearchMain>
        <h1 className='ir'>계정 검색 페이지</h1>
        <UserUl>
          {userInput
            ? userArr.slice(0, 100).map((item) => {
                return (
                  <li className='user-list'>
                    <UserItem
                      width='50px'
                      height='50px'
                      image={
                        item.image.includes('Ellipse.png')
                          ? NoneProfileImg
                          : item.image
                      }
                      alt={`${item.username}님의 프로필 이미지`}
                      // eslint-disable-next-line no-underscore-dangle
                      key={item._id}
                      accountname={item.accountname}
                      keywordName={
                        item.username.includes(userInput) ? userInput : ''
                      }
                      keywordId={
                        item.accountname.includes(userInput) ? userInput : ''
                      }
                      firstUserName={
                        item.username.includes(userInput)
                          ? item.username.split(userInput)[0]
                          : item.username
                      }
                      lastUserName={
                        item.username.includes(userInput)
                          ? item.username.split(userInput)[1]
                          : ''
                      }
                      firstUserId={
                        item.accountname.includes(userInput)
                          ? item.accountname.split(userInput)[0]
                          : item.accountname
                      }
                      lastUserId={
                        item.accountname.includes(userInput)
                          ? item.accountname.split(userInput)[1]
                          : ''
                      }
                    />
                  </li>
                );
              })
            : ''}
        </UserUl>
      </SearchMain>
      <TabMenu place='search' />
    </>
  );
};

export default Search;
