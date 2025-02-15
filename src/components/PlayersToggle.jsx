
const PlayersToggle = () => {
    return (
        <div className="my-10">
            <div className="flex justify-between">
                <p>Available Players</p>
                <div className="flex items-center">
                    <button className="btn">Available</button>
                    <button className="btn">Selected(0)</button>
                    
                </div>
            </div>
        </div>
    )
}

export default PlayersToggle