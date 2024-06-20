Function.prototype.apply1 = function(obj = window, args){
    const symbol = Symbol('fn');
    obj[symbol] = this;
    const res = obj[symbol](...args);
    delete obj[symbol];
    return res;
}

Function.prototype.call1 = function(obj=window,...args){
    const symbol = Symbol('fn');
    obj[symbol] = this;
    let res = obj[symbol](...args);
    delete obj[symbol];
    return res;
}