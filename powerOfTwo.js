let isPowOfTwo=(num)=>{
    if(num === 1){
        return true
    }
    for(let i=1; i<num;i++){
        if(num%(2**i) ===0){
            return true
        }
    }
    return false
}

console.log(isPowOfTwo(2))
console.log(isPowOfTwo(3))
console.log(isPowOfTwo(19))

// power of two bitwise

let isPowerOfTwoBitwise=(n)=>{
    if(n<1){
        return false
    }
    return (n & (n-1)) ===0
}
console.log(isPowerOfTwoBitwise(20))
console.log(isPowerOfTwoBitwise(5))
console.log(isPowerOfTwoBitwise(4))