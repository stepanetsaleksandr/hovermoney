import logo from "../logo.svg";
import classes from "./Header.modul.css";

const Header = (props) => {
    return (
        <div>
            <header className={classes.header}>
                <img src=""/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}
export default Header;