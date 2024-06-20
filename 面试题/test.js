Function.prototype.myBind = function(context){
    const self = this;
    return function(){
        console.log(arguments);
        return self.apply(context,arguments)
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