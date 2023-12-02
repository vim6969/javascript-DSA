// create a two dimensiona matrix

let matrix=(numRows,numCols,initialValue)=>{
    let arr=[]
    for(let i=0 ;i<numRows;i++){
        let col=[]
        for(let j=0; j<numCols; j++){
            col[j]=initialValue
        }
        arr[i]=col
    }
    return arr
}

let twoD = matrix(2,3,-1)
console.log(twoD)