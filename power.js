var myPow = function(x, n) {
    if(n==0){
        return 1
    }
    for(let i=1; i<=n; i++){
        x = x*x 
    }
    return x
};

console.log(myPow(2.0000,10))