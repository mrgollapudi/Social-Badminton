import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the Badminton Billing App</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/players">Manage Players</Link>
                    </li>
                    <li>
                        <Link to="/attendance">Mark Attendance</Link>
                    </li>
                    <li>
                        <Link to="/billing">View Billing</Link>
                    </li>
                    <li>
                        <Link to="/settings">Settings</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;