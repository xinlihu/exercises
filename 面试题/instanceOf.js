function instanceOf(left,right){
    if(typeof left==null||typeof left!=='object'){
        return false;
    }
    let class1 = left.__proto__;
    let class2 = right.protoType;
    while(true){
        if(class1 == undefined || class2 == undefined){
            return false;
        }
        if(class1 == class2){
            return true;
        }
        class1 = class2.__proto__;
    }
}