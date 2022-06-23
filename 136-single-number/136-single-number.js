/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
        var obj = {};

    for (var i of nums) {
        if (!obj[i]){
            obj[i] = 1;
        }
        else {
            obj[i]++
        }
    }  
    for (var i in obj) {
        if (obj[i] === 1){
            return i
        }
    }
    
    
};