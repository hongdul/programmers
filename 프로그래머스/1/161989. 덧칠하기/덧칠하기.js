function solution(n, m, section) {
    var answer = 0;
    
    while (section.length !== 0) {
        const left = Math.min(...section);
        answer++;

        for (let i = section.length - 1; i >= 0; i--) {
            if (section[i] < left + m) {
                section.splice(i, 1);
            }
        }
    }
    
    return answer;
}