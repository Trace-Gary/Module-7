import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MyThemeContext } from '../context/MyThemeProvider'

export default function BtcNavBar() {

    const {theme} = useContext(MyThemeContext);

    return (
        <nav className="BtcNavBar"style={{backgroundColor: theme.background, color: theme.foreground}}>
            <ul className="menu">
<li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/bitcoin">Bitcoin Rates</NavLink></li>
</ul> </nav>
) }