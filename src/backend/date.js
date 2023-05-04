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

  function validateDate(date) {
    const dateRegex = /\b(\d{1,2})\/(\d{1,2})\/(\d{4})\b/;
    const dateMatch = date.match(dateRegex);
    if (dateMatch === null) {
      return false;
    }
    const day = parseInt(dateMatch[1]);
    const month = parseInt(dateMatch[2]);
    const year = parseInt(dateMatch[3]);
    if (day < 1 || day > 31) {
      return false;
    }
    if (month < 1 || month > 12) {
      return false;
    }
    return true;
  }

//   function main() {
//     const readline = require('readline').createInterface({
//       input: process.stdin,
//       output: process.stdout
//     });
  
//     readline.question('Please enter a string containing a date (DD/MM/YYYY): ', (inputString) => {
//       readline.close();
//       const dateRegex = /\b(\d{1,2})\/(\d{1,2})\/(\d{1,})\b/;
//       const dateMatch = inputString.match(dateRegex);
     
//       const inputDate = dateMatch[0];
//       const dateParts = inputDate.split("/");
//       const day = parseInt(dateParts[0]);
//       const month = parseInt(dateParts[1]);
//       const year = parseInt(dateParts[2]);
//       if (!validateDate(inputDate)) {
//         console.log("Invalid input format. Please enter date in DD/MM/YYYY format.");
//         return;
//       }
//       const dayOfWeek = getDayOfWeek(year, month, day);
//       console.log(`The day of the week for ${inputDate} is ${dayOfWeek}.`);
//     });
//   }
// main();

export default getDayOfWeek;