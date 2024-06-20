// 滴滴一面
// 1
var a =1
function a(){
    console.log(a)
    let a = 2
}
console.log(a)
a()
// 2
var F=function(){};
Object.prototype.a = function(){
    console.log('a');
}
Function.prototype.b = function(){
    console.log('b');
}
var f = new F();
f.a()//'a'
f.b()//error
F.a()//'a'
F.b()//'b'
// 3
async function async1(){
    console.log('async start')
    await async2()
    console.log('async end')
}
async function async2(){
    console.log('async2')
}
console.log('script start')
setTimeout(function(){
    console.log('settimeout')
})
async1()
new Promise(function(resolve){
    console.log('promise1 start')
    resolve()
    console.log('promise1 end')
}).then(function(){
    console.log('promise1 then')
})
console.log('script end')
// 4.实现bind方法
Function.prototype.myBind = function(context){
    const self = this;
    return function(){
        console.log(arguments);
        self.apply(context,arguments)
    }
}
//5.es5实现你认为最好的继承
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
// 8
type Exclude<T,U> = type C = Exclude<'a'|'b'|'c','a'|'b'> // 'c'