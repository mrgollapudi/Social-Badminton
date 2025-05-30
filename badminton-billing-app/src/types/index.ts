export interface Player {
    id: number;
    name: string;
    isRegular: boolean;
}

export interface AttendanceRecord {
    playerId: number;
    week: number;
    attended: boolean;
}

export interface BillingInfo {
    playerId: number;
    totalAmount: number;
    breakdown: {
        regularFee: number;
        casualFee: number;
    };
}