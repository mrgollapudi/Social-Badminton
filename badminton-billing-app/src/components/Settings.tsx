import React, { useState } from 'react';

const Settings: React.FC = () => {
    const [regularFee, setRegularFee] = useState<number>(0);
    const [casualFee, setCasualFee] = useState<number>(0);

    const handleRegularFeeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegularFee(Number(e.target.value));
    };

    const handleCasualFeeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCasualFee(Number(e.target.value));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Logic to save the fees (e.g., API call or state management)
        console.log('Regular Fee:', regularFee);
        console.log('Casual Fee:', casualFee);
    };

    return (
        <div>
            <h2>Settings</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Regular Fee:
                        <input
                            type="number"
                            value={regularFee}
                            onChange={handleRegularFeeChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Casual Fee:
                        <input
                            type="number"
                            value={casualFee}
                            onChange={handleCasualFeeChange}
                        />
                    </label>
                </div>
                <button type="submit">Save Fees</button>
            </form>
        </div>
    );
};

export default Settings;