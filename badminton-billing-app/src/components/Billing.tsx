import React from 'react';
import { useEffect, useState } from 'react';
import { Player } from '../types';
import { calculateMonthlyBill } from '../utils/calculations';

interface BillingProps {
    players: Player[];
    regularFee: number;
    casualFee: number;
    attendanceRecords: { [playerId: string]: boolean[] };
}

const Billing: React.FC<BillingProps> = ({ players, regularFee, casualFee, attendanceRecords }) => {
    const [bills, setBills] = useState<{ [playerId: string]: number }>({});

    useEffect(() => {
        const newBills: { [playerId: string]: number } = {};
        players.forEach(player => {
            const attendance = attendanceRecords[player.id] || [];
            const totalWeeks = attendance.length;
            const regularAttendance = attendance.filter(attended => attended).length;

            if (regularAttendance === totalWeeks) {
                newBills[player.id] = regularFee;
            } else {
                newBills[player.id] = casualFee * regularAttendance;
            }
        });
        setBills(newBills);
    }, [players, regularFee, casualFee, attendanceRecords]);

    return (
        <div>
            <h2>Monthly Billing</h2>
            <table>
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Bill Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map(player => (
                        <tr key={player.id}>
                            <td>{player.name}</td>
                            <td>${bills[player.id] || 0}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Billing;