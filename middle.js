
// AssertEqual
const assertEqual = function(actual, expected) {
  if(actual.toString() === expected.toString()) {
    console.log(' Assertion Passed: '+ actual + ' === '  + expected)
    return true
  }else{
    console.log(' Assertion Faild: '+ actual + ' !== '  + expected)
    return false
  }

};

// assertEqual(['1',2],['1',2])


// eqArrays
const eqArrays = function(array1,array2){
  console.log(array1.toString());
  if(array1.toString() == array2.toString()){
    return true
  }else {
    return false
  }

}



// middle Function
const middle = function(array) {

  if(array.length <= 2) {
    return []
  }
  // The arry lenth more than 2

  if(array.length % 2 ) {
    // This Condetion work for odd Lenght 

    // get index of middle element
    const index = (array.length + 1) /2;
    return [array[index - 1]]

  }else {
    // This Condetion work for even Lenght 
    // get index of middle element
    const index = (array.length) /2;
    return [array[index -1 ], array[index]]
  }

}
