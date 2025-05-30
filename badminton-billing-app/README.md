# Badminton Billing App

This project is a web application designed to facilitate the management of badminton court bookings for a group of 30 to 50 players. It allows users to track player attendance, calculate monthly bills based on attendance, and differentiate between regular and casual fees.

## Features

- **Player Management**: Add, edit, and view a list of players.
- **Attendance Tracking**: Mark attendance for each player on a weekly basis.
- **Billing Calculation**: Automatically calculate monthly bills based on attendance, distinguishing between regular and casual players.
- **Fee Configuration**: Set and update regular and casual fees through a user-friendly interface.

## Project Structure

```
badminton-billing-app
├── src
│   ├── components
│   │   ├── PlayerList.tsx
│   │   ├── Attendance.tsx
│   │   ├── Billing.tsx
│   │   └── Settings.tsx
│   ├── pages
│   │   ├── index.tsx
│   │   ├── players.tsx
│   │   ├── attendance.tsx
│   │   └── billing.tsx
│   ├── utils
│   │   └── calculations.ts
│   └── types
│       └── index.ts
├── public
│   └── favicon.ico
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/badminton-billing-app.git
   ```
2. Navigate to the project directory:
   ```
   cd badminton-billing-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the development server:
   ```
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000` to access the application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.