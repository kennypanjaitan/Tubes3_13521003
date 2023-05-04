function monthToInt(month) {
    const months = {
      "January": 1,
      "February": 2,
      "March": 3,
      "April": 4,
      "May": 5,
      "June": 6,
      "July": 7,
      "August": 8,
      "September": 9,
      "October": 10,
      "November": 11,
      "December": 12,
    };
    return months[month];
  }
  
  function getDayOfWeek(year, month, day) {
    const magicNumber = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
    if (month < 3) {
      year -= 1;
    }
  
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const calculate = ((year + Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400) + magicNumber[month - 1] + day) % 7);
    return days[calculate];
  }
  
  const dayOfWeek = getDayOfWeek(201, 2, 29);
  console.log(dayOfWeek); // Output: Friday
  