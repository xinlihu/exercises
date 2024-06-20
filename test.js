// 6判断字符串是否为回文字符串
function isPalidrome(s,start,end){
    while(start<end){
        if(s[start]!=s[end]){
            break;
        }
        start ++;
        end --;
    }
    return start >= end;
}


// 7一个字符串删掉一个字符后是回文字符串
function validPalidrome(s){
    let start = 0;
    let end = s.length -1 ;
    while(start < end){
        if(s[start]!=s[end]){
            break;
        }
        start ++;
        end --;
    }
    return start >= end || isPalidrome(s,start,end-1) || isPalidrome(s,start+1,end)
}

console.log(validPalidrome('aba'));