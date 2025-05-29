function solution(wallpaper) {
    
    var width = [wallpaper[0].length, 0];
    var height = [wallpaper.length, 0];
    
    for(var i = 0; i < wallpaper.length; i++) {
        var first = wallpaper[i].indexOf("#");
        var last = wallpaper[i].lastIndexOf("#");
        if (first == -1 && last == -1) continue;
        
        width[0] = (width[0] < first) ? width[0] : first;
        width[1] = (width[1] <= last) ? last : width[1];
        height[0] = (height[0] < i) ? height[0] : i;
        height[1] = (height[1] <= i) ? i : height[1];
    }
    
    return [height[0], width[0], height[1] + 1, width[1] + 1];
}