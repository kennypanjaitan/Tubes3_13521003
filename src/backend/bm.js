function bmMatch(text, pattern){
    var last = buildLast(pattern);
    var n = text.length;
    var m = pattern.length;
    var i = m - 1;

    if (i > n - 1){
        return -1;
    }
    var j = m - 1;
    do{
        if(pattern[j] == text[i]){
            if(j==0){
                return i;
            }else{
                i--;
                j--;
            }
        }else{
            lastOcc = last[text[i]];
            i = i + m - Math.min(j, 1+lastOcc);
            j = m-1;
        }
    }while(i <= n-1);
    return false;
}

function buildLast(pattern){
    var last = new Array(128);
    for (var i = 0; i < 128; i++){
        last[i] = -1;
    }
    for (var i = 0; i < pattern.length; i++){
        last[pattern[i]] = i;
    }
    return last;
}


function main(){
    var dna = "ATGCGATACGCTTACGCTTCGAGGAA";
    var disease = "ATGCGATACGTTA";
    console.log(bmMatch(dna, disease));

}
main();