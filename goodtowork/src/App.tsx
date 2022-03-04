import './App.css';
import { UserContextProvider } from './contexts/user/UserContext'
import Navbar from './components/panels/main/navbar/Navbar'
import Screen from './components/panels/main/screen/Screen'
import Chat from './components/panels/main/chat/Chat'

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <div className="App" style={{ display: 'grid', gridTemplateColumns: '200px 1fr auto', height: '100%' }}>
          <Navbar/>
          <Screen/>
          <Chat/>
        </div>
      </Router>
    </UserContextProvider>
  );
}

export default App;
