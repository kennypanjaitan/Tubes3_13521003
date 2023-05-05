function kmpMatch(text, pattern){
    var n = text.length;
    var m = pattern.length;

    var lps = computeLPSArray(pattern);

    var i = 0;
    var j = 0;
    while(i < n){
        if(pattern[j] == text[i]){
            if (j == m - 1){
                return i - m + 1;
            }
            i++;
            j++;
        }
        else if (j > 0){
            j = lps[j-1];

        }
        else{
            i++;
        }
    }
    return -1;

}

function computeLPSArray(pattern){
    var lps = new Array(pattern.length);
    var m = pattern.length;
    var j = 0;
    var i = 1;

    while(i < m){
        if(pattern[i] == pattern[j]){
            j++;
            lps[i] = j;
            i++;
            j++;

        }
        else if(j > 0){
            j = lps[j-1];
        }
        else{
            lps[i] = 0;
            i++;
        }
    }
    return lps;

}

function main(){
    var text = "ABABDABACDABABCABAB";
    var pattern = "ABABDABCDABABCABAB";
    console.log(kmpMatch(text, pattern))
}
main();