import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../PlayerSelection.css'; 

function PlayerSelection({ coins, deductCoins }) {
    const [availableActive, setAvailableActive] = useState(true);
    const [players, setPlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [customAlert, setCustomAlert] = useState(null);
    const maxSelectedPlayers = 6;

    useEffect(() => {
        fetch('../players.json')
            .then((response) => response.json())
            .then((data) => setPlayers(data))
            .catch((error) => console.error("Error fetching players data:", error));
    }, []);

    const showAlert = (message) => {
        setCustomAlert(message);
        setTimeout(() => {
            setCustomAlert(null);
        }, 3000); 
    };

    const togglePlayerSelection = (player) => {
        const biddingPrice = parseInt(player.biddingPrice.replace(/,/g, ''), 10);

        if (selectedPlayers.includes(player)) {
            showAlert(`${player.name} is already selected!`);
        } else if (selectedPlayers.length < maxSelectedPlayers) {
            if (coins >= biddingPrice) {
                setSelectedPlayers([...selectedPlayers, player]);
                deductCoins(biddingPrice);
            } else {
                showAlert(`Insufficient coins to select ${player.name}!`);
            }
        } else {
            showAlert('Player limit reached. Please remove one from the selected list.');
        }
    };

    const displayedPlayers = availableActive ? players : selectedPlayers;

    return (
        <div style={{ padding: '20px' }}>
            
            {customAlert && (
                <div className="custom-alert">
                    <p>{customAlert}</p>
                    <div className="countdown-bar"></div>
                </div>
            )}

            <div className='flex items-center justify-between'>
                <h2 className='text-xl font-[700] my-10'>
                    {availableActive
                        ? 'Available Players'
                        : `Selected Players (${selectedPlayers.length}/${maxSelectedPlayers})`}
                </h2>
                <div className='flex gap-3'>
                    <button
                        className='btn'
                        onClick={() => setAvailableActive(true)}
                        style={{
                            backgroundColor: availableActive ? '#E7FE29' : '#ccc',
                        }}
                    >
                        Available
                    </button>
                    <button
                        className='btn'
                        onClick={() => setAvailableActive(false)}
                        style={{
                            backgroundColor: !availableActive ? '#E7FE29' : '#ccc',
                        }}
                    >
                        Selected ({selectedPlayers.length})
                    </button>
                </div>
            </div>

            <div className={availableActive ? 'grid grid-cols-1 lg:grid-cols-3 w-[85%] gap-4 mx-auto mt-4' : 'grid grid-cols-1 gap-[30px]'}>

                {displayedPlayers.map((player) => (
                    <div
                        className={availableActive ? `card card-compact bg-base-100 w-90 shadow-xl ${selectedPlayers.includes(player) ? 'selected' : ''}` : ''}
                        key={player.playerId}
                    >

                        <div className={availableActive ? "card-body" : "flex items-center gap-20 bg-base-100 shadow-xl"}>

                            {availableActive ? (
                                <>
                                    <figure>
                                        <img
                                            src={player.image}
                                            alt={player.name}
                                            className="rounded-full object-cover w-32 h-32"
                                        />
                                    </figure>
                                    <h2 className="card-title"><i className="fa-solid fa-user"></i>{player.name}</h2>
                                    <div className='flex justify-between'>
                                        <p><i className="fa-solid fa-flag pr-1" style={{ color: "#a3a3a3" }}></i>{player.country}</p>
                                        <p className='text-end'>{player.role}</p>
                                    </div>
                                    <p><strong>Rating</strong></p>
                                    <div className='flex justify-between'>
                                        <p>{player.battingType}</p>
                                        <p className='text-end'>{player.bowlingType}</p>
                                    </div>

                                    <div className="flex justify-between">
                                        <p><strong>Price: ${player.biddingPrice}</strong> </p>
                                        <p className='text-end font-extrabold cursor-pointer cp'
                                            onClick={() => togglePlayerSelection(player)}
                                        >
                                            Choose Player
                                        </p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <figure>
                                        <img
                                            src={player.image}
                                            alt={player.name}
                                            className="rounded-full object-cover w-32 h-32"
                                        />
                                    </figure>
                                    <div className='flex items-center justify-between w-full'>
                                        <div>
                                            <h2 className="card-title">{player.name}</h2>
                                            <p>{player.battingType}</p>
                                            <p>{player.bowlingType}</p>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => setSelectedPlayers(selectedPlayers.filter((p) => p !== player))}
                                                className="btn mr-4"
                                            >
                                                <i className="fa-solid fa-trash fa-xl" style={{ color: "#b34747" }}></i>
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                ))}
                <button
                    className={availableActive ? 'hidden' : 'btn w-60'}
                    onClick={() => setAvailableActive(true)}
                    style={{
                        backgroundColor: '#E7FE29',
                    }}
                >
                    Available
                </button>
            </div>
        </div>
    );
}

PlayerSelection.propTypes = {
    coins: PropTypes.number.isRequired,
    deductCoins: PropTypes.func.isRequired,
};

export default PlayerSelection;
