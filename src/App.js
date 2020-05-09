import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';




function App() {
  const [friends, addFriend] = useState(false)

  // function Addfriend(friends) {
  //   addFriend(!friends)
  // }




  return (
    <div className="App">
      <Header />
      <Profile updateFriend={addFriend} friends={friends} />
    </div>
  );
}

export default App;
