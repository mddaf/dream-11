import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <section className='relative text-white'>
            
            <div className="news w-[75%] mx-auto border-2 border-white-500 rounded-lg z-10 absolute left-1/2 transform -translate-x-1/2 -top-40">
                <div className="flex flex-col items-center rounded-lg m-4 py-20 gap-3 text-black bg-gradient-to-r from-[#93b3e7] to-[#e2cda8]" >
                    <h1 className='text-[32px] font-bold'>Subscribe to our Newsletter</h1>
                    <p className='text-[20px] font-light'>Get the latest updates and news right in your inbox!</p>
                    <form>
                        <fieldset className="form-control">
                            <div className="flex flex-col md:flex-row gap-3">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input input-bordered" />
                                <button className="btn bg-gradient-to-r from-[#f47ad1] to-[#e8a42e] font-bold">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>

            {/* Footer Section */}
            <div className="footer flex flex-col items-center bg-text-base-content p-10 bg-indigo-950 mt-52 relative z-0">

                <img src={logo} alt="Logo" className='mt-40'/>
                <div className='flex gap-60 justify-center'>
                    <nav className='w-[20%]'>
                        <h1 className='footer-title'>About Us</h1>
                        <p>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </nav>
                    <nav>
                        <h1 className='footer-title'>Quick Links</h1>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contacts</a></li>
                        </ul>
                    </nav>
                    <nav>
                        <h1 className='footer-title'>Subscribe</h1>
                        <p>Subscribe to our channel</p>
                        <form>
                            <fieldset className="form-control w-full mt-3">
                                <div className="join">
                                    <input
                                        type="text"
                                        placeholder="username@site.com"
                                        className="input input-bordered join-item" />
                                    <button className="btn bg-gradient-to-r from-[#f47ad1] to-[#e8a42e]  font-bold join-item">Subscribe</button>
                                </div>
                            </fieldset>
                        </form>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default Footer;
