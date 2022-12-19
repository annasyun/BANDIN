import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
import ModifyProfile from './pages/ModifyProfile/ModifyProfile';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/chatlist' element={<ChatList />} />
        <Route path='/emaillogin' element={<EmailLogin />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/setupprofile' element={<SetUpProfile />} />
        <Route path='/follower' element={<Follower />} />
        <Route path='/following' element={<Following />} />
        <Route path='/search' element={<UserSearch />} />
        <Route path='/modifyprofile' element={<ModifyProfile />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
