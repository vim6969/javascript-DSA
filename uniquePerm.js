function swap(arr,i,pos){
    let temp = arr[i]
    arr[i]=arr[pos]
    arr[pos]=temp
}
let uniquePerm=(arr,pos,sol=[])=>{
    if(pos==arr.length-1){
        //base condition
        sol.push([...arr])
        return sol;
    }
    let keepUnique = new Set() //set is created to keep a track of 
    for(let i=pos; i<arr.length;i++){
        if(keepUnique.has(arr[i])) {
            // if element exists in the set
            continue
        }
            keepUnique.add(arr[i]) 
            swap(arr,i,pos)
            // permutate
            uniquePerm(arr,pos+1,sol)
            // reverse swap
            swap(arr,i,pos)
    }
    // sol.filter((value,index,self)=>{
    //return self.findIndex(v=> JSON.stringify(v) === JSON.stringify(value)) === index})
    return sol;
}

let sol = uniquePerm([1,2,2],0)
console.log(sol)