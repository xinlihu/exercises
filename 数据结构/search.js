function binsearch(arr,data){
    let min = 0;
    let max = arr.length - 1;
    while(min<=max){
        let mid = Math.floor((min+max)/2);
        if(arr[mid]<data){
            min = mid+1;
        }else if(arr[mid] === data){
            return mid;
        }else{
            max = mid-1;
        }
    }
    return -1;
}

var array = [1,2,3,4,5,10,22,35,75,100];
console.log(binsearch(array,100));