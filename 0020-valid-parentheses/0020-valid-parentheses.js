/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const arr = s.split('');
    const stack = [];
    let top =-1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]=='(' || arr[i]=='{' || arr[i]=='['){
            stack[top+=1] = arr[i];
        }
         else {
            if(top===-1 || 
            arr[i]==')' && stack[top]!='(' ||
            arr[i]=='}' && stack[top]!='{' ||
            arr[i]==']' && stack[top]!='['
            ) {return false;}
        
            top-=1;
         }
         console.log('arr[i]',arr[i]);
         console.log('stack[top]',stack[top]);
         console.log('top',top)

    }
    return top === -1
};