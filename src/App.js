import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import Panel from "./Content/Panel";
import Table from "./Content/Table";

function App(props) {
  return (
    <div className='app-wrapper'>
        <Logo/>
        <Header/>
        <Navbar/>
        <div className = 'app-wrapper-content'>
            <Panel/>
            <Table/>
        </div>
    </div>
  );
}

export default App;
