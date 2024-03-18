/**
 * Returns a random greeting message to inspire productivity.
 * @returns {string} A random greeting message with optional emoji code.
 */
export const getRandomGreeting = (): string => {
  const hoursLeft = 24 - new Date().getHours();

  const greetingsText: string[] = [
    "Seize the day and make it yours! 💪",
    "Unlock your potential and dominate today!",
    "Embrace the grind and conquer your goals!",
    "Rise and grind! Today is your opportunity!",
    "Let's hustle and make things happen!",
    "Transform your dreams into reality today!",
    "Fuel your ambition and crush your tasks!",
    "Take charge of your destiny and thrive!",
    "You're unstoppable! Keep pushing forward!",
    "Every action you take brings you closer to success!",
    "Embrace the challenge and emerge victorious!",
    "Today's agenda: Win! 💼",
    "Stay focused, stay determined, stay winning!",
    "Success starts with you, right here, right now!",
    "Believe in yourself and watch miracles happen!",
    "Your potential is limitless. Own it!",
    "Turn obstacles into opportunities today!",
    "Embrace the journey. Success awaits!",
    "The only way is up! Keep climbing!",
    "Be bold, be fearless, be extraordinary!",
    "Today is the day to shine bright! 🌟",

    `Carpe diem! Have an amazing ${new Date().toLocaleDateString("en", {
      weekday: "long",
    })}!`,
    `Happy ${new Date().toLocaleDateString("en", {
      month: "long",
    })}! Let's make it a month of greatness! 💥`,
    hoursLeft > 4
      ? `${hoursLeft} hours left to conquer! Make them count!`
      : `Only ${hoursLeft} hours left to make magic happen!`,
  ];

  const randomIndex = Math.floor(Math.random() * greetingsText.length);
  return greetingsText[randomIndex];
};
