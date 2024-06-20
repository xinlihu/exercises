function new2(){
    let args = Array.from(arguments);
    let constructor = args.shift();
    let context = Object.create(constructor.prototype);
    let result = constructor.apply(context,args);
    return ((typeof result)==='object'&&result!==null?result:context)
}

function Person(name, age){
    this.name = name;
    this.age = age;
}

let p = new2(Person,'hu',23);
console.log(p);