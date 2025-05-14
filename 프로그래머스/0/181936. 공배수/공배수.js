function solution(number, n, m) {
    var answer = 1;
    if (number % n != 0) return 0
    if (number % m != 0) return 0
    return answer;
}