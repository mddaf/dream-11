import { useState } from 'react';
import PropTypes from 'prop-types';

const PlayersToggle = () => {
    const [isAvailable, setIsAvailable] = useState(true);

    const handleToggle = (status) => {
        setIsAvailable(status);
    };

    return (
        <div className="my-10">
            <div className="flex justify-between">
            <p>{isAvailable ? "Available Players" : "Selected Players"}</p>
                <div className="flex items-center">
                    <button 
                        className={`btn ${isAvailable ? 'btn-active' : ''}`} 
                        onClick={() => handleToggle(true)}>
                        Available
                    </button>
                    <button 
                        className={`btn ${!isAvailable ? 'btn-active' : ''}`} 
                        onClick={() => handleToggle(false)}>
                        Selected (0)
                    </button>
                </div>
            </div>
            <Toggle avail={isAvailable} />
        </div>
    );
};

const Toggle = ({ avail }) => {
    if (avail) {
        return (
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className='selected'>Selected</div>
        );
    }
};

Toggle.propTypes = {
    avail: PropTypes.bool.isRequired,
};

export default PlayersToggle;
