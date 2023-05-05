package main

import "fmt"

func kmpMatch(text string, pattern string) int {
    n := len(text)
    m := len(pattern)

    lps := computeLPSArray(pattern)

    i := 0
    j := 0
    for i < n {
        if pattern[j] == text[i] {
            if j == m-1 {
                return i - m + 1
            }
            i++
            j++
        } else if j > 0 {
            j = lps[j-1]
        } else {
            i++
        }
    }
    return -1
}

func computeLPSArray(pattern string) []int {
    m := len(pattern)
    lps := make([]int, m)

    j := 0
    i := 1
    for i < m {
        if pattern[i] == pattern[j] {
            j++
            lps[i] = j
            i++
        } else if j > 0 {
            j = lps[j-1]
        } else {
            lps[i] = 0
            i++
        }
    }
    return lps
}

func main() {
    text := "ABABDABACDABABCABAB"
    pattern := "ABABDABACDABABCABAB"
    fmt.Println(kmpMatch(text, pattern))
}
