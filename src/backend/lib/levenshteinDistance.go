package main

import "fmt"

func levenshteinDistance(str1, str2 string) int {
    m := len(str1)
    n := len(str2)
    dp := make([][]int, m+1)
    for i := range dp {
        dp[i] = make([]int, n+1)
    }

    for i := 0; i <= m; i++ {
        dp[i][0] = i
    }

    for j := 0; j <= n; j++ {
        dp[0][j] = j
    }

    for i := 1; i <= m; i++ {
        for j := 1; j <= n; j++ {
            if str1[i-1] == str2[j-1] {
                dp[i][j] = dp[i-1][j-1]
            } else {
                dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
            }
        }
    }

    return dp[m][n]
}

func min(a, b, c int) int {
    if a < b && a < c {
        return a
    } else if b < c {
        return b
    }
    return c
}

func main() {
    distance := levenshteinDistance("kitten", "sitting")
    fmt.Println(distance)
}