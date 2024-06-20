// 冒泡排序
function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1);
            }
        }
    }
    return arr;
}
function selectSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let min = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        swap(arr,min,i);
    }
    return arr;
}
function insertSort(arr){
    for(let i=1;i<arr.length;i++){
        let temp = arr[i];
        let j = i;
        while(j>0 && arr[j-1]>temp){
            arr[j] = arr[j-1];
            j--;
        }
        arr[j] = temp;
    }
    return arr;
}
function shellSort(arr){
    const gaps=[1,3,5];
    for(let g=0;g<gaps.length;g++){
        for(let i=gaps[g];i<arr.length;i++){
            let temp = arr[i];
            let j=i;
            while(j>=gaps[g]&&arr[j-gaps[g]]>temp){
                arr[j] = arr[j-gaps[g]];
                j-=gaps[g];
            }
            arr[j] = temp;
        }
    }
    return arr;
}
function quickSort(arr){
    if(arr.length === 0){
        return [];
    }
    let less = [];
    let bigger = [];
    let pivot = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]<pivot){
            less.push(arr[i]);
        }else{
            bigger.push(arr[i]);
        }
    }
    return quickSort(less).concat(pivot,quickSort(bigger));
}
function swap(arr, i, j){
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function print(arr){
    console.log(arr.toString());
}

// print(bubbleSort([1,5,4,2,6,10,3]));
// print(selectSort([1,5,4,2,6,10,3]));
print(insertSort([1,5,4,2,6,10,3]));
print(shellSort([1,5,4,2,6,10,3]))
print(quickSort([1,5,4,2,6,10,3]))