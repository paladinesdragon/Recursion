function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
      //product = product * arr[i];
    }
    return product;
  }

function sum(arr, n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  return sum;
}
  
//Recursion
function multiplyRecurse(arr, n) {
  if(n <= 0) {
    return 1;
  } else {
    return multiplyRecurse(arr, n-1) * arr[n-1];
  }
}

  function sumRecurse(arr, n) {
    if(n<=0) {
      return n;
    } else {
      return sum(arr, n-1) + arr[n-1];
    }
  }

//uncomment to test
  //multiply([2,6,10,25,3], 5);
  //multiplyRecurse([2,6,10,25,3], 5);
  //sum([2,6,12,55,3,57], 5)
  //sumRecurse([2,6,12,55,3,57], 5)