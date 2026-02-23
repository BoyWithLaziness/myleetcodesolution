/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let longerCount = 0;
    if(!nums.length) return 0;
    for(let num of set){
        if(!set.has(num-1)){
            let currentNum = num;
            let currentCount = 1;
            while(set.has(currentNum+1)) {
               currentNum+=1;  
               currentCount+=1;
            }

            if(longerCount < currentCount){
                longerCount = currentCount
            }
        }
    }
    return longerCount;
};