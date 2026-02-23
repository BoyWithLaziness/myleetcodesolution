/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let l=0,r=numbers.length-1;
    while(l<r){
    let ans = numbers[l]+numbers[r]
            if(ans===target){
                return [l+1,r+1]
            }
            if(ans>target){
                r-=1
            }
            if(ans<target){
                l+=1
            }
    }
};