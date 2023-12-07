let swapfunc=(arr,l,r)=>{
    if(l>=r){
        return arr
    }
    //swap
    [arr[l],arr[r]]=[arr[r],arr[l]]
    return swapfunc(arr,l+1,r-1)
}
console.log(swapfunc([1,2,3,4],0,3))