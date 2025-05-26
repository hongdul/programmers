function solution(arr, intervals) {
    var answer = [];
    
    for(var i = 0; i < intervals.length; i++) {
        answer = answer.concat(arr.slice(intervals[i][0], intervals[i][1] + 1));
    }
    
    return answer;
}