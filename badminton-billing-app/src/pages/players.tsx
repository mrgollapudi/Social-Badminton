import React from 'react';
import PlayerList from '../components/PlayerList';

const PlayersPage: React.FC = () => {
    return (
        <div>
            <h1>Player Management</h1>
            <PlayerList />
        </div>
    );
};

export default PlayersPage;