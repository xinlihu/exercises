// 构建二维数组
Array.matrix = function(rownum,colnum,initial){
    let arr = [];
    for(let i=0;i<rownum;i++){
        let colArr = [];
        for(let j=0;j<colnum;j++){
            colArr[j] = initial;
        }
        arr[i] = colArr;
    }
    return arr;
}


// 栈操作
function Stack(){
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}
function push(element){
    this.dataStore[this.top++] = element;
}
function pop(){
    return this.dataStore[--this.top];
}
function peek(){
    return this.dataStore[this.top-1];
}
function clear(){
    this.top = 0;
}
function length(){
    return this.top;
}

function mulBase(number, base){
    const stack = new Stack();
    let tempNumber = number;
    while(tempNumber>0){
        stack.push(tempNumber % base);
        tempNumber = Math.floor(tempNumber/2);
    }
    let result = '';
    while(stack.length()>0){
        result += stack.pop();
    }
    return result;
}
console.log(mulBase(10,2));

// 队列操作
function Queue(){
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.empty = empty;
}
function enqueue(element){
    this.dataStore.push(element);
}
function dequeue(){
    return this.dataStore.shift();
}
function front(){
    return this.dataStore[0];
}
function back(){
    return this.dataStore[this.dataStore.length - 1]
}
function empty(){
    return this.dataStore.length > 0;
}