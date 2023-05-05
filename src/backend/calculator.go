package main

import (
    "fmt"
    "strconv"
    "regexp"
    "unicode"
    "math"
)

func parseExpression(expr string) (result float64, err error) {
    var outputQueue []float64
    var operatorStack []string

    for i := 0; i < len(expr); i++ {
        char := string(expr[i])

        if char == " " {
            continue
        }

        if _, err := strconv.Atoi(char); err == nil {
            numStr := char
            for i+1 < len(expr) && unicode.IsDigit(rune(expr[i+1])) {
                numStr += string(expr[i+1])
                i++
            }
            num, _ := strconv.ParseFloat(numStr, 64)
            outputQueue = append(outputQueue, num)
        } else if regexp.MustCompile(`[+\-*/^]`).MatchString(char) {
            precedence := getPrecedence(char)

            for len(operatorStack) > 0 && precedence <= getPrecedence(operatorStack[len(operatorStack)-1]) {
                result := evaluateExpression(outputQueue[len(outputQueue)-2], outputQueue[len(outputQueue)-1], operatorStack[len(operatorStack)-1])
                outputQueue = outputQueue[:len(outputQueue)-2]
                outputQueue = append(outputQueue, result)
                operatorStack = operatorStack[:len(operatorStack)-1]
            }

            operatorStack = append(operatorStack, char)
        } else if char == "(" {
            operatorStack = append(operatorStack, char)
        } else if char == ")" {
            for len(operatorStack) > 0 && operatorStack[len(operatorStack)-1] != "(" {
                result := evaluateExpression(outputQueue[len(outputQueue)-2], outputQueue[len(outputQueue)-1], operatorStack[len(operatorStack)-1])
                outputQueue = outputQueue[:len(outputQueue)-2]
                outputQueue = append(outputQueue, result)
                operatorStack = operatorStack[:len(operatorStack)-1]
            }

            if len(operatorStack) == 0 || operatorStack[len(operatorStack)-1] != "(" {
                panic("Tanda kurung tidak cocok")
            }

            operatorStack = operatorStack[:len(operatorStack)-1]
        } else {
            panic(fmt.Sprintf("Karakter tidak valid: %s", char))
        }
    }

    for len(operatorStack) > 0 {
        operator := operatorStack[len(operatorStack)-1]
        operatorStack = operatorStack[:len(operatorStack)-1]

        if !regexp.MustCompile(`[+\-*/^]`).MatchString(operator) {
            panic(fmt.Sprintf("Operator tidak valid: %s", operator))
        }

        b := outputQueue[len(outputQueue)-1]
        outputQueue = outputQueue[:len(outputQueue)-1]
        a := outputQueue[len(outputQueue)-1]
        outputQueue = outputQueue[:len(outputQueue)-1]

        if operator == "/" && b == 0 {
            panic("Pembagian dengan 0")
        }

        result := evaluateExpression(a, b, operator)
        outputQueue = append(outputQueue, result)
    }

    if len(outputQueue) != 1 {
        // fmt.Print(outputQueue)
        panic("Tidak bisa dihitung")
    }

    return outputQueue[0], nil
}

func getPrecedence(operator string) int {
    switch operator {
    case "+", "-":
        return 1
    case "*", "/":
        return 2
    case "^":
        return 3
    default:
        return 0
    }
}

func evaluateExpression(a float64, b float64, operator string) float64 {
    switch operator {
    case "+":
        return a + b
    case "-":
        return a - b
    case "*":
        return a * b
    case "/":
        return a / b
    case "^":
        return math.Pow(a, b)
    default:
        panic(fmt.Sprintf("Operator tidak valid: %s", operator))
    }
}

func main() {
    var result float64
    var err error
    inputExpr := "-5+3"

    result, err = parseExpression(inputExpr)
    if err != nil {
        fmt.Printf("Error: %v\n", err)
    } else {
        fmt.Printf("Result: %f\n", result)
    }

    
}
