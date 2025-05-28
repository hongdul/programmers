function solution(my_string) {
    var answer = '';
    
    for (const c of my_string) {
        answer = c + answer;
    }
    
    return answer;
}