let swapArr = (arr,i,j) => {
    let b = arr[i]
    arr[i] = arr[j]
    arr[j] = b;
}

let quickSort = (arr,low,high) => {
    if(low<high){
        let pivot = partition(arr,low,high);
        // console.log(arr)
        console.log(`Next: quickSort(arr,low: ${low},high: ${pivot-1})
        arrNow: ${arr}`)
        quickSort(arr,low,pivot-1);
        console.log(`Next: quickSort(arr,low: ${pivot+1},high: ${high})
        arrNow: ${arr}`)
        quickSort(arr,pivot+1,high);
    }
}


let partition = (arr,low,high) => {
    let i = (low - 1);
    
    for(let j = low;j <= high-1;j++ ){
        // console.log(``)
        if(arr[j] > arr[high]){
            i++;
            swapArr(arr,i,j);
            console.log(`${arr[j]} > ${arr[high]} ? => Yes! swap ${arr[j]} with ${arr[i]} i: ${i} j: ${j}`)
        }else{
            console.log(`${arr[j]} > ${arr[high]} ? => No! i: ${i} j: ${j}`)
        }
    }
            swapArr(arr,i+1,high)
            console.log(`${arr}`)
            

    return i+1;

}

let arr = [ 8,6,3,1,4 ]
// console.log(`Initial arr: ${arr}`)
// quickSort(arr,0,arr.length-1)


module.exports = { quickSort }
