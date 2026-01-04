# 🎲 Dice Game

A fun and interactive dice game built with React and Vite. Test your luck by predicting the dice roll and earn points!

## 🎮 Game Overview

The Dice Game is a simple yet engaging game where players select a number (1-6) and then roll a dice. If your selected number matches the rolled dice number, you earn points equal to that number. If you guess wrong, 2 points are deducted from your total score.

## ✨ Features

- **Interactive Gameplay**: Select a number and roll the dice to test your prediction
- **Score System**: Earn points when you guess correctly, lose points when you're wrong
- **Visual Feedback**: Beautiful dice images that change based on the roll
- **Score Management**: Reset your score anytime to start fresh
- **Game Rules**: Toggle to view game rules and instructions
- **Responsive Design**: Clean and modern UI with smooth interactions

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Rehansajid2130/DiceGame.git
cd DiceGame
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🎯 How to Play

1. **Start the Game**: Click "Play Now" on the start page
2. **Select a Number**: Choose any number from 1 to 6
3. **Roll the Dice**: Click on the dice image to roll
4. **Score Points**: 
   - If your selected number matches the dice roll, you earn points equal to that number
   - If your guess is wrong, 2 points are deducted from your total score
5. **Continue Playing**: Keep selecting numbers and rolling the dice to increase your score
6. **Reset Score**: Click "Reset Score" to start over with a score of 0
7. **View Rules**: Click "Show Rules" to see the game instructions

## 📁 Project Structure

```
Project_3/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── components/
│   │   │   ├── GamePage.jsx       # Main game component
│   │   │   ├── GamePage.css       # Game page styles
│   │   │   ├── Start_Page.jsx     # Start screen component
│   │   │   └── Start_Page.css     # Start page styles
│   │   └── images/
│   │       ├── dice_1.png to dice_6.png  # Dice face images
│   │       ├── dice.png
│   │       └── dices.png
│   ├── App.jsx                    # Main app component
│   ├── App.css                    # App styles
│   ├── index.css                  # Global styles
│   └── main.jsx                   # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Technologies Used

- **React** (^19.1.1) - UI library
- **Vite** (^7.1.7) - Build tool and dev server
- **ESLint** - Code linting
- **CSS3** - Styling

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check code quality

## 🎨 Game Rules

- Select any number from 1 to 6
- Click on the dice image to roll
- If the selected number matches the dice number, you get points equal to the dice number
- If you guess wrong, 2 points will be deducted from your total score
- Your score cannot go below 0

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to this project:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Rehan Sajid**
- GitHub: [@Rehansajid2130](https://github.com/Rehansajid2130)

## 🙏 Acknowledgments

- Built with React and Vite
- Dice images and assets created for this project

---

Enjoy playing the Dice Game! 🎲🎉
