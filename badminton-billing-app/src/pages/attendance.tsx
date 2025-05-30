import React from 'react';
import Attendance from '../components/Attendance';

const AttendancePage: React.FC = () => {
    return (
        <div>
            <h1>Weekly Attendance</h1>
            <Attendance />
        </div>
    );
};

export default AttendancePage;