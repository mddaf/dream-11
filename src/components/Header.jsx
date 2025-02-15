import coin1 from '../assets/coin.png';
import logo from '../assets/logo.png';
import PropTypes from 'prop-types';

const Header = ({ coins }) => {
    return (
      <div className="navbar bg-base-100 sticky top-0 opacity-90 z-10">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <img src={logo} alt="Site logo" />
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>Fixture</a></li>
            <li><a>Schedule</a></li>
            
            <li>
              <a>
              <span>{coins} Coins</span>
              <img src={coin1} alt="Coin icon" className="w-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  Header.propTypes = {
    coins: PropTypes.number.isRequired,
  };
  
  export default Header;
  