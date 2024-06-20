function dynFib(n){
    const arr = [];
    for(let i=0;i<=n;i++){
        arr[i] = 0;
    }
    if(n===1||n===2){
        return 1;
    }else{
        arr[1] = 1;
        arr[2] = 2;
        for(let i=3;i<=n;i++){
            arr[i] = arr[i-1]+arr[i-2];
        }
        return arr[i-1];
    }
}

function lcs(w1,w2){
    let max = 0;
    let index = 0;
    let lcsarr = new Array(w1.length+1);
    for(let i=0;i<=w1.length+1;i++){
        lcsarr[i] = new Array(w2.length+1);
        for(let j=0;j<=w2.length;j++){
            if(i==0||j==0){
                lcsarr[i][j] = 0;
            }else{
                if(w1[i-1]==w2[j-1]){
                    lcsarr[i][j] = lcsarr[i-1][j-1]+1
                }else{
                    lcsarr[i][j] = 0;
                }
            }
            if(max<lcsarr[i][j]){
                max = lcsarr[i][j];
                index = i;
            }
        }
    }
    return w1.substring(index-max,max)
}

console.log(lcs('hxl','hxp'));

function max(a,b){
    return (a>b)?a:b;
}
function putStr(s){
    process.stdout.write(s.toString());
}
function knapsack(capacity,size,value,n){
    if(n==0||capacity==0){
        return 0;
    }
    if(size[n-1]>capacity){
        return knapsack(capacity,size,value,n-1)
    }else{
        return max(value[n-1]+knapsack(capacity-size[n-1],size,value,n-1),knapsack(capacity,size,value,n-1))
    }
}

function knapsack_dyn(capacity,size,value,n){
    let K = [];
    let str = ''
    for(let i=0;i<=capacity+1;i++){
        K[i] = [];
    }
    for(let i=0;i<=n;i++){
        for(let w=0;w<=capacity;w++){
            if(i==0||w==0){
                K[i][w] = 0;
            }else if(size[i-1]<=w){
                K[i][w] = max(value[i-1]+K[i-1][w-size[i-1]],K[i-1][w])
            }else{
                K[i][w] = K[i-1][w]
            }
            str+=K[i][w];
        }
    }
    console.log(str.length);
    putStr(str+'\n')
    return K[n][capacity]
}


let size = [3,4,7,8,9]
let value = [4,5,10,11,13]
let capacity = 16;
let n =5;
// console.log(knapsack(capacity,size,value,n))
console.log(knapsack_dyn(capacity,size,value,n))