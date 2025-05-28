function solution(numLog) {
    var answer = '';
    var prev = numLog[0];
    
    for (const cur of numLog) {
        switch(cur - prev) {
            case 1: 
                answer += "w";
                prev = cur;
                continue;
            case -1: 
                answer += "s";
                prev = cur;
                continue;
            case 10: 
                answer += "d";
                prev = cur;
                continue;
            case -10: 
                answer += "a";
                prev = cur;
                continue;
            default: continue;
        }
        prev = cur;
    }
    
    
    return answer;
}