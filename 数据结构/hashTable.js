function HashTable(){
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.showDistro = showDistro;
    this.betterHash = betterHash;
    this.getKey = getKey;
    this.put = put;
}

function simpleHash(data){
    let total = 0;
    for(let i=0;i<data.length;i++){
        total += data.charCodeAt(i);
    }
    return total % this.table.length;
}

function betterHash(data){
    const H = 37;
    let total = 0;
    for(let i=0;i<data.length;i++){
        total += H*total + data.charCodeAt(data[i]);
    }
    total = total%this.table.length;
    return total;
}

function put(item){
    // const pos = this.simpleHash(item);
    const pos = this.betterHash(item);
    this.table[pos] = item;
}

function showDistro(){
    for(let i=0;i<this.table.length;i++){
        if(this.table[i]!==undefined){
            console.log(i+':'+this.table[i]);
        }
    }
}
function getKey(key){
    return this.table[key];
}
const hTable = new HashTable();
hTable.put('xiaoli');
hTable.put('mama');
hTable.put('baba');
hTable.put('yeye');
hTable.put('nainai');
hTable.put('jiejie');
// hTable.showDistro(); 
console.log(hTable.getKey(39));