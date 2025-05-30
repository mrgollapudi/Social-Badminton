export const calculateMonthlyBill = (attendance: boolean[], regularFee: number, casualFee: number): number => {
    const totalWeeks = attendance.length;
    const weeksPlayed = attendance.filter(week => week).length;

    if (weeksPlayed === totalWeeks) {
        return regularFee;
    } else {
        return casualFee;
    }
};

export const calculateTotalBill = (players: { name: string; attendance: boolean[]; }[], regularFee: number, casualFee: number): { name: string; bill: number; }[] => {
    return players.map(player => ({
        name: player.name,
        bill: calculateMonthlyBill(player.attendance, regularFee, casualFee)
    }));
};