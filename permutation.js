
let perm = (arr, pos, sol=[]) => {
  if (pos == arr.length - 1) {
    sol.push([...arr])
    return
  }

  for (let i = pos; i < arr.length; i++) {
    //swap
    let temp = arr[pos];
    arr[pos] = arr[i];
    arr[i] = temp;
    // [arr[pos],arr[i]]=[arr[i],arr[pos]] this doesn't work
    //perm
    perm(arr, pos + 1,sol);
    //reverse swap
    temp = arr[pos];
    arr[pos] = arr[i];
    arr[i] = temp;
    // [arr[pos],arr[i]]=[arr[i],arr[pos]] this doesn't work

  }
  return sol;
};

let sol =perm([1, 2, 3], 0);
console.log(sol)
