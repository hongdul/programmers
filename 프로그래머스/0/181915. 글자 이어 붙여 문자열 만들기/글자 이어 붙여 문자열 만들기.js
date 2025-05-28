function solution(my_string, index_list) {
    var answer = '';
    var i = 0;

    for(const i of index_list) {
        answer += my_string[i];
    }
    
    return answer;
}