import bg from '../assets/bgShadow.png';
import ban from '../assets/banner-main.png';

const Banner = () => {
  return (
    <div
      className="rounded-[12px] mt-10"
      style={{
        backgroundColor: 'black',
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className='flex flex-col items-center text-center gap-5 py-10 text-white'>
        <img src={ban} alt="" />
        <h1>Asseml yhei teamdfdgs dshfgshgfhjds</h1>
        <p>begain tbfhbdsj bfhjsdfh</p>
        <button className="btn btn-primary mb-10">Get Started</button>
      </div>
    </div>
  );
};

export default Banner;
