function solution(park, routes) {

    for(var i = 0; i < park.length; i++) {
        const m = park[i].indexOf("S");
        if (m != -1) {
            var position = [i, m];
        }
    }

    for(const route in routes) {
        const direction = routes[route].slice(0, 1);
        const distance = Number(routes[route].slice(2));
        var flag = true;
        
        switch(direction) {
            case "N":
                var start = position[0];
                if (position[0] - distance < 0) break;
                
                for(var i = 1; i <= distance; i++) {
                    if(park[start - i][position[1]]== "X") {
                        flag = false;
                        break;
                    }
                }
                if (flag) position[0] -= distance;
                break;
                
            case "S":
                var start = position[0];
                if (position[0] + distance >= park.length) break;
                
                for(var i = 1; i <= distance; i++) {
                    if(park[start + i][position[1]] == "X") {
                        flag = false;
                        break;
                    }
                }
                if (flag) position[0] += distance;
                break;
                
            case "W":
                var start = position[1];
                if (position[1] - distance < 0) break;
                
                for(var i = 1; i <= distance; i++) {
                    if(park[position[0]][start - i] == "X") {
                        flag = false;
                        break;
                    }
                }
                if (flag) position[1] -= distance;
                break;
                
            case "E":
                var start = position[1];
                if (position[1] + distance >= park[0].length) break;
                
                for(var i = 1; i <= distance; i++) {
                    if(park[position[0]][start + i] == "X") {
                        flag = false;
                        break;
                    }
                }
                if (flag) position[1] += distance;
                break;
                
            default: break;
        }
        
    }
    
    return position;
}