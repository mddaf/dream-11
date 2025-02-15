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
        <h1 className="text-2xl md:text-3xl font-semibold ">
        Assemble Your Ultimate Dream 11 Cricket Team        </h1>
        <p className="text-sm md:text-base text-[#ffffffb3]">
        Beyond Boundaries Beyond Limits        </p>
        <p className='border-2 border-[#E7FE29] mb-10 rounded-xl'><button className="btn bg-[#E7FE29]  m-1" onClick={onClaim}>
        Claim Free Credit
        </button></p>
      </div>
    </div>
  );
};

Banner.propTypes = {
  onClaim: PropTypes.func.isRequired,
};
export default Banner;
