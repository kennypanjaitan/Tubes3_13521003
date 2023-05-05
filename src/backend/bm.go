package main

import (
    "fmt"
)

func bmMatch(text string, pattern string) int {
    last := buildLast(pattern)
    n := len(text)
    m := len(pattern)
    i := m - 1

    if i > n-1 {
        return -1
    }

    j := m - 1
    for i <= n-1 {
        if pattern[j] == text[i] {
            if j == 0 {
                return i
            } else {
                i--
                j--
            }
        } else {
            lastOcc := last[text[i]]
            i = i + m - min(j, 1+lastOcc)
            j = m - 1
        }
    }
    return -1
}

func buildLast(pattern string) map[byte]int {
    last := make(map[byte]int)
    for i := 0; i < len(pattern); i++ {
        last[pattern[i]] = i
    }
    return last
}

func min(x, y int) int {
    if x < y {
        return x
    }
    return y
}
