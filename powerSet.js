let powerSet=(arr,solSet,i)=>{
    
    if(i==arr.length){
        //stop traversing, base condition
        return [solSet]
    }
    //
    const includeSet = powerSet(arr,solSet.concat(arr[i]),i+1) //include element
    const excludeSet = powerSet(arr,solSet,i+1) //exclude element

    return includeSet.concat(excludeSet)
}

console.log(powerSet(['a','b','c'],[],0))
