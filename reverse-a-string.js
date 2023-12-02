let reverseString =(str)=>{
    let splitString = str.split("")
    splitString = splitString.reverse()
    let reversedStr = splitString.join('')
    return reversedStr    
}

console.log(reverseString('apple'))