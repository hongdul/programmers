function solution(n) {
    var answer = 0;
    
    answer = (Math.floor(Math.sqrt(n)) == Math.sqrt(n)) ? 1 : 2;
    
    return answer;
}