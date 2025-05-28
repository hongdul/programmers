function solution(number) {
    
    var rest = 0;
    for(const n of number) {
        rest += Number(n);
    };
    
    return rest % 9;
    
}