import React, { useState } from 'react';

const PlayerList = () => {
    const [players, setPlayers] = useState([]);
    const [newPlayer, setNewPlayer] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingPlayer, setEditingPlayer] = useState('');

    const handleAddPlayer = () => {
        if (newPlayer) {
            setPlayers([...players, newPlayer]);
            setNewPlayer('');
        }
    };

    const handleEditPlayer = (index) => {
        setEditingIndex(index);
        setEditingPlayer(players[index]);
    };

    const handleUpdatePlayer = () => {
        if (editingIndex !== null && editingPlayer) {
            const updatedPlayers = [...players];
            updatedPlayers[editingIndex] = editingPlayer;
            setPlayers(updatedPlayers);
            setEditingIndex(null);
            setEditingPlayer('');
        }
    };

    const handleDeletePlayer = (index) => {
        const updatedPlayers = players.filter((_, i) => i !== index);
        setPlayers(updatedPlayers);
    };

    return (
        <div>
            <h2>Player List</h2>
            <input
                type="text"
                value={newPlayer}
                onChange={(e) => setNewPlayer(e.target.value)}
                placeholder="Add new player"
            />
            <button onClick={handleAddPlayer}>Add Player</button>

            <ul>
                {players.map((player, index) => (
                    <li key={index}>
                        {editingIndex === index ? (
                            <>
                                <input
                                    type="text"
                                    value={editingPlayer}
                                    onChange={(e) => setEditingPlayer(e.target.value)}
                                />
                                <button onClick={handleUpdatePlayer}>Update</button>
                            </>
                        ) : (
                            <>
                                {player}
                                <button onClick={() => handleEditPlayer(index)}>Edit</button>
                                <button onClick={() => handleDeletePlayer(index)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlayerList;