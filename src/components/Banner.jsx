import bg from '../assets/bgShadow.png';
import ban from '../assets/banner-main.png';
import PropTypes from 'prop-types';

const Banner = ({ onClaim }) => {
  return (
    <div
      className="rounded-[12px] mt-10 bg-black bg-cover bg-center relative overflow-hidden shadow-lg"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative flex flex-col items-center text-center gap-5 py-10 text-white">
        <img src={ban} alt="Main banner" className="w-full max-w-xs" />
        <h1 className="text-2xl md:text-3xl font-semibold">
          Assembly Heroes Team
        </h1>
        <p className="text-sm md:text-base">
          Begin the journey with us to explore endless possibilities.
        </p>
        <button className="btn btn-primary mb-10" onClick={onClaim}>
          Claim
        </button>
      </div>
    </div>
  );
};

Banner.propTypes = {
  onClaim: PropTypes.func.isRequired,
};
export default Banner;
