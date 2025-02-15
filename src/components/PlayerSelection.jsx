import { useState, useEffect } from 'react';

function PlayerSelection() {
  const [availableActive, setAvailableActive] = useState(true);
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const maxSelectedPlayers = 6;

  
  useEffect(() => {
    
    fetch('../../public/players.json')
      .then((response) => response.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error("Error fetching players data:", error));

  }, []);

  const togglePlayerSelection = (player) => {
    if (selectedPlayers.includes(player)) {

      alert(`${player.name} is already selected!`);
      
    } else if (selectedPlayers.length < maxSelectedPlayers) {

      setSelectedPlayers([...selectedPlayers, player]);
    } else {

      alert('Player limit reached. Please remove one from the selected list.');
    }
  };

  
  const displayedPlayers = availableActive ? players : selectedPlayers;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>
        {availableActive
          ? 'Available Players'
          : `Selected Players (${selectedPlayers.length}/${maxSelectedPlayers})`}
      </h2>
      <div style={{ marginTop: '20px' }}>
        <button className='btn'
          onClick={() => setAvailableActive(true)}
          style={{
            backgroundColor: availableActive ? '#007bff' : '#ccc',
          }}
        >
          Available
        </button>
        <button className='btn'
          onClick={() => setAvailableActive(false)}
          style={{
            backgroundColor: !availableActive ? '#007bff' : '#ccc',
          }}
        >
          Selected ({selectedPlayers.length})
        </button>
      </div>

      <div className="flex flex-wrap gap-4 mt-4">
        {displayedPlayers.map((player) => (
          <div className="card card-compact bg-base-100 w-96 shadow-xl" key={player.playerId}>
            <figure>
              <img
                src={player.image}
                alt={player.name}
                className="rounded-full object-cover w-32 h-32" 
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{player.name}</h2>
              
              
              {availableActive ? (
                <>
                  <p><strong>Country:</strong> {player.country}</p>
                  <p><strong>Role:</strong> {player.role}</p>
                  <p><strong>Batting:</strong> {player.battingType}</p>
                  <p><strong>Bowling:</strong> {player.bowlingType}</p>
                  <p><strong>Bidding Price:</strong> {player.biddingPrice}</p>
                  <div className="card-actions justify-end">
                    <button
                      onClick={() => togglePlayerSelection(player)}
                      className="btn btn-primary"
                    >
                      Choose Player
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p><strong>Batting:</strong> {player.battingType}</p>
                  <p><strong>Bowling:</strong> {player.bowlingType}</p>
                  <div className="card-actions justify-end">
                    <button
                      onClick={() => setSelectedPlayers(selectedPlayers.filter((p) => p !== player))}
                      className="btn btn-danger"
                    >
                      Remove
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlayerSelection;
