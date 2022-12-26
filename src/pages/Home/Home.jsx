import { useEffect, useState } from 'react';
import TopMainNav from '../../components/CommonUI/Nav/TopMainNav/TopMainNav';
import { EmptyHomeWrap, HomeWrap, FeedTxt } from './styled';
import CommonPost from '../../components/CommonUI/CommonPost/CommonPost';
import profileImg from '../../assets/profile.png';
import Button from '../../components/atoms/Button/Button';
import feedMatching from '../../api/home/feedMatching';
import TabMenu from '../../components/CommonUI/TabMenu/TabMenu';

const Home = () => {
  const [post, setPost] = useState([]);

  const goSearch = () => {
    window.location.href = '/search';
  };

  useEffect(() => {
    const getPost = () => {
      feedMatching()
        .then((data) => {
          // console.log(data);
          setPost(data.posts);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getPost();
  }, []);

  console.log(post);

  return (
    <>
      <TopMainNav />
      {post.length !== 0 ? (
        <HomeWrap>
          {post.map((item, id) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <div key={id}>
                <CommonPost
                  image={item.author.image}
                  username={item.author.username}
                  accountname={item.author.accountname}
                  content={item.content}
                  heartCount={item.heartCount}
                  commentCount={item.commentCount}
                  imageSrc={item.image}
                  id={item.id}
                  createdAt={item.createdAt}
                />
              </div>
            );
          })}
        </HomeWrap>
      ) : (
        <EmptyHomeWrap>
          <img src={profileImg} alt='프로필 이미지' className='profile-img' />
          <FeedTxt>유저를 검색해 팔로우 해보세요!</FeedTxt>
          <Button
            type='button'
            size='md, lg'
            tit='검색하기'
            onClick={goSearch}
          ></Button>
        </EmptyHomeWrap>
      )}
      {/* <TapNav /> */}
      <TabMenu place='search' />
    </>
  );
};

export default Home;
