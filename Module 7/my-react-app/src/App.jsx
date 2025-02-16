import MyThemeProvider from './context/MyThemeProvider'
import AppRoutes from './routes/AppRoutes'
import NavBar from './components/NavBar'
import './App.css'
import { UserProvider } from './context/UserContext'
import ThemeSwitcher from './components/ThemeSwitcher'
// import BtcNavBar from './components/BtcNavBar'

function App() {
  return (
    <div className="App">
      <UserProvider> 
      <MyThemeProvider>
      <ThemeSwitcher />
        < NavBar />
        {/* < BtcNavBar /> */}
      <AppRoutes />
      </MyThemeProvider>
       </UserProvider>
    </div>
  );
}

export default App;




// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Clock from './components/Clock'
// import ClockDisplay from './components/Clock'
// import ActivityFinder from './components/ActivityFinder'
// import BitcoinRates from './components/bitcoinRates'
// import RefCounter from './components/refCounter'
// import VideoPlayer from './components/videoPlayer'
// import ReducerCounter from './components/reducerCounter'
// import PostListReducer from './components/postListReducer'
// import SubscribeForm from './components/SubscribeForm'
// import LoginForm from './components/LoginForm'
// import { EmojiProvider } from './context/EmojiContext'
// import Emoji from './components/Emoji'



      {/* <ClockDisplay /> */}
      {/* <ActivityFinder/> */}
      {/* <RefCounter /> */}
      {/* < BitcoinRates /> */}
      {/* < VideoPlayer /> */}
      {/* <ReducerCounter /> */}
      {/* <PostListReducer /> */}
      {/* <SubscribeForm /> */}
      {/* < LoginForm /> */}
      {/* <EmojiProvider>
       <Emoji/>
      <BitcoinRates />
      </EmojiProvider>  */}