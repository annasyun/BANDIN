import { Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLogin } from './atoms';

import Home from './pages/Home/Home';
import EmailLogin from './pages/EmailLogin/EmailLogin';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import SetUpProfile from './pages/SetUpProfile/SetUpProfile';
import Follower from './pages/Follower/Follower';
import Following from './pages/Following/Following';
import NotFound from './pages/404/404';
import UserSearch from './pages/Search/Search';
import ChatList from './pages/ChatList/ChatList';
import ChatRoom from './pages/ChatRoom/ChatRoom';
import EditProfile from './pages/EditProfile/EditProfile';
import Splash from './pages/Splash/Splash';
import MyProfile from './pages/MyProfile/MyProfile';
import AddProduct from './pages/AddProduct/AddProduct';
import PostDetail from './pages/PostDetail/PostDetail';
import PrivateRoutes from './components/Router/PrivateRoutes';
import PrivateRoutesRev from './components/Router/PrivateRoutesRev';
import EditProduct from './pages/EditProduct/EditProduct';
import UploadPost from './pages/UploadPost/UploadPost';
import EditPost from './pages/EditPost/EditPost';
import SearchMusicHall from './pages/SearchMusicHall/SearchMusicHall';

const App = () => {
  const isLoginState = useRecoilValue(isLogin);

  return (
    <Routes>
      <Route path='/' element={<Splash />} />
      <Route element={<PrivateRoutes authorization={isLoginState} />}>
        <Route path='/emaillogin' element={<EmailLogin />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signup/setupprofile' element={<SetUpProfile />} />
      </Route>
      <Route element={<PrivateRoutesRev authorization={isLoginState} />}>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/search' element={<UserSearch />} />
        <Route path='/search/musichall' element={<SearchMusicHall />} />
        <Route path='/upload' element={<UploadPost />} />
        <Route path='/editpost/:postId' element={<EditPost />} />
        <Route path='/chatlist' element={<ChatList />} />
        <Route path='/chatlist/chatroom' element={<ChatRoom />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/product/:productId/edit' element={<EditProduct />} />
        <Route path='/editprofile' element={<EditProfile />} />
        <Route path='/profile/:accountName' element={<MyProfile />} />
        <Route path='/:accountName/follower' element={<Follower />} />
        <Route path='/:accountName/following' element={<Following />} />
        <Route path='/post/:postId' element={<PostDetail />} />
        <Route path='/*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
