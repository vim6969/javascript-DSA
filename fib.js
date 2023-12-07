// fibonacci sequence
let printFib=(n)=>{
    for(let i=0; i<n;i++){
        // the loop runs n times as in the input
        if(i==0){
            console.log(0)
        }
        if(i==1){
            console.log(1)
        }
        if(i>1){
            console.log(fib(i)) // call the fib function
        }
    }
    
}

let fib = (n) => {
  if (n == 1 || n == 0) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

printFib(10);
