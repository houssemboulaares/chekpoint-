import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './comonents/ProfilePhoto';
import FullName from './comonents/FullName';
import Address from './comonents/Address';


function App() {
  return (
    <div className="main">
      <ProfilePhoto></ProfilePhoto>
      <FullName></FullName>
      <Address></Address>
    </div>
  );
}

export default App;
