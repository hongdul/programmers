function solution(schedules, timelogs, startday) {
    var answer = 0;
    
    for (let i = 0; i < schedules.length; i++) {
        let schedule = schedules[i];
        if (schedule % 100 >= 50) {
            schedule += 50;
        } else {
            schedule += 10;
        }
        let timelog = timelogs[i];
        
        let pass = 1;
        for (let j = 0; j < timelog.length; j++) {
            if ((startday + j) % 7 === 6 || (startday + j) % 7 === 0) continue;
            if (timelog[j] > schedule) {
                pass = 0;
                break;
            }
        }
        answer += pass;
    }
    
    return answer;
}