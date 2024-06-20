function SleepMan(){
    let taskList = [];
    this.eat = function(content){
        taskList.push(content);
        return this;
    }
    function next(){
        if(taskList.length > 0){
            let task = taskList.shift();
            if(task instanceof Function){
                task.call(this);
            }else{
                console.log('eat:'+task);
                next();
            }
        }
    }
    this.sleep = function(wait){
        let timeout = function(){
            return setTimeout(function(){
                next()
            },wait)
        };
        taskList.push(timeout);
        return this;
    }
    setTimeout(next,0);
}
let lm = new SleepMan();
lm.sleep(3000).eat("me").sleep(2000).eat('i').sleep(1000).eat('he')