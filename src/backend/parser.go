package main

import (
    "math"
    "strconv"
    "strings"
    "time"
    "regexp"
)

func parser(str string) string {
    if isDate(str) {
        date, _ := time.Parse("2006-01-02", str)
        year, month, day := date.Date()
        dayOfWeek := date.Weekday().String()
        return month.String() + " " + strconv.Itoa(day) + " " + strconv.Itoa(year) + " is " + dayOfWeek
    } else if isMathExpression(str) {
        return parseExpression(str)
    } else {
        return "Belum ada"
    }
}

func isDate(str string) bool {
    _, err := time.Parse("2006-01-02", str)
    return err == nil
}

func parseExpression(str string) string {
    return strconv.FormatFloat(eval(strings.ReplaceAll(str, "^", "**")), 'f', -1, 64)
}

func isMathExpression(str string) bool {
    pattern := `^[\d\s\(\)\+\-\*\/\^\%\.]+$`
    return regexp.MustCompile(pattern).MatchString(str)
}

func eval(str string) float64 {
    val, _ := strconv.ParseFloat(str, 64)
    return val
}

func add(a, b float64) float64 {
    return a + b
}

func subtract(a, b float64) float64 {
    return a - b
}

func multiply(a, b float64) float64 {
    return a * b
}

func divide(a, b float64) float64 {
    return a / b
}

func modulo(a, b float64) float64 {
    return math.Mod(a, b)
}

func power(a, b float64) float64 {
    return math.Pow(a, b)
}
