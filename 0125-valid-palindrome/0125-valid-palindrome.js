/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase().split('');
    console.log('str',str)
    let l=0,r=str.length-1;
    for(let i=0;i<str.length;i++){
        if(str[l]!=str[r]){
            return false;
        }
        l+=1;
        r-=1;
    }
    return true;
};