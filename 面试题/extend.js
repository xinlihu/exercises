function Parent(){
    this.name = "Parent";
}
function Child(){
    Parent.call(this);
    this.type = 'children';
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;