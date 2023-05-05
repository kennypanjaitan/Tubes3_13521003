package main

import(
  "regexp"
  "strconv"
  "strings"
  "fmt"
  "os"
  "bufio"
)

func MonthToInt(month string) int {
  months := map[string]int{
      "January":   1,
      "February":  2,
      "March":     3,
      "April":     4,
      "May":       5,
      "June":      6,
      "July":      7,
      "August":    8,
      "September": 9,
      "October":   10,
      "November":  11,
      "December":  12,
  }
  return months[month]
}

func GetDayOfWeek(year int, month int, day int) map[string]interface{} {
  magicNumber := []int{0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4}
  if month < 3 {
      year -= 1
  }

  days := []string{"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}
  months := []string{"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"}
  calculate := ((year + year/4 - year/100 + year/400 + magicNumber[month-1] + day) % 7)
  dayRes := days[calculate]
  monthRes := months[month-1]
  return map[string]interface{}{
      "year":    year,
      "month":   monthRes,
      "day":     day,
      "dayName": dayRes,
  }
}

func ValidateDate(date string) bool {
  dateRegex := regexp.MustCompile(`\b(\d{1,2})\/(\d{1,2})\/(\d{4})\b`)
  dateMatch := dateRegex.FindStringSubmatch(date)
  if dateMatch == nil {
      return false
  }
  day, _ := strconv.Atoi(dateMatch[1])
  month, _ := strconv.Atoi(dateMatch[2])
  // year, _ := strconv.Atoi(dateMatch[3])
  if day < 1 || day > 31 {
      return false
  }
  if month < 1 || month > 12 {
      return false
  }
  return true
}

func main() {
    reader := bufio.NewReader(os.Stdin)
    fmt.Print("Please enter a string containing a date (DD/MM/YYYY): ")
    inputString, _ := reader.ReadString('\n')
    inputString = strings.TrimSpace(inputString)
    dateRegex := regexp.MustCompile(`\b(\d{1,2})\/(\d{1,2})\/(\d{1,})\b`)
    dateMatch := dateRegex.FindStringSubmatch(inputString)
    inputDate := dateMatch[0]
    dateParts := strings.Split(inputDate, "/")
    day, _ := strconv.Atoi(dateParts[0])
    month, _ := strconv.Atoi(dateParts[1])
    year, _ := strconv.Atoi(dateParts[2])
    if !ValidateDate(inputDate) {
        fmt.Println("Invalid input format. Please enter date in DD/MM/YYYY format.")
        return
    }
    dayOfWeek := GetDayOfWeek(year, month, day)
    fmt.Printf("The day of the week for %s is %s.\n", inputDate, dayOfWeek["dayName"])
}
