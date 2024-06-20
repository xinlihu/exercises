Function.prototype.myBind = function(context,...args){
    const self = this;
    return function F(){
        // 如果是new调用F函数，则this指向new出来的对象，通过判断this的原型是F，来区分出为new的情况
        if(this instanceof F){
            return new self(...args,...arguments)
        }
        return self.apply(context,[...args,...arguments])
    }
}

const module1 = {
    x: 42,
    getX: function () {
      return this.x;
    },
  };

  const unboundGetX = module1.getX;
  console.log(unboundGetX());

  const boundGetX = unboundGetX.myBind(module1,[1,2,3,4,5]);
console.log(boundGetX());