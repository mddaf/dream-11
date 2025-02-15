import coin1 from '../assets/coin.png'
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl"><img src={logo} alt="" /></a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Link</a></li>
                    <li><a>Home</a></li>
                    <li><a>Fixture</a></li>
                    <li><a>Schedule</a></li>
                    <li><a>0 Coins<img src={coin1} alt="" className='w-5'/></a> </li>
                </ul>
            </div>
        </div>
    )
}

export default Header