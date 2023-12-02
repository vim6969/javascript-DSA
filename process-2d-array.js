let grades = [[89,77,78],[76,82,81],[91,94,89]]
let avgs=[]
for (let i=0 ; i<grades.length;i++){
    let avg=0
    let sum = 0
    for(let j =0; j<grades[i].length;j++){
        sum+=grades[i][j]
    }
    avg = Math.floor(sum/grades[i].length)
    avgs.push(avg)
}
console.log(avgs)