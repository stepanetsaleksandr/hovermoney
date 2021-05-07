import classes from "./Logo.module.css";

const Logo = (props) => {
    return (
        <div >
            <img className={classes.logo} src='https://media-exp1.licdn.com/dms/image/C560BAQHoWYSfOdpD3w/company-logo_200_200/0/1573774015730?e=2159024400&v=beta&t=wsE0NSN8CEhz2WTeszlGUUrvzGX-gflHVsO8hycQzwA'/>
        </div>
    )
}

export default Logo;