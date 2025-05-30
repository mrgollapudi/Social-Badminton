import React, { useState } from 'react';
import { Player } from '../types';

interface AttendanceProps {
    players: Player[];
    onAttendanceUpdate: (attendance: { [key: string]: boolean }) => void;
}

const Attendance: React.FC<AttendanceProps> = ({ players, onAttendanceUpdate }) => {
    const [attendance, setAttendance] = useState<{ [key: string]: boolean }>({});

    const handleAttendanceChange = (playerId: string) => {
        setAttendance(prev => ({
            ...prev,
            [playerId]: !prev[playerId]
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onAttendanceUpdate(attendance);
    };

    return (
        <div>
            <h2>Mark Attendance</h2>
            <form onSubmit={handleSubmit}>
                {players.map(player => (
                    <div key={player.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={attendance[player.id] || false}
                                onChange={() => handleAttendanceChange(player.id)}
                            />
                            {player.name}
                        </label>
                    </div>
                ))}
                <button type="submit">Submit Attendance</button>
            </form>
        </div>
    );
};

export default Attendance;