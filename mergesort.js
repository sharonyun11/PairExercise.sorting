function split (wholeArray) {
  let firstHalf, secondHalf, halfLength;

  if (wholeArray.length % 2 === 0) {
    halfLength = wholeArray.length / 2;
  } else {
    halfLength = Math.floor(wholeArray.length / 2);
  }
  firstHalf = wholeArray.slice(0, halfLength);
  secondHalf = wholeArray.slice(halfLength);

  return [firstHalf, secondHalf];
}

function merge (arr1, arr2) {
  let newArr = [];
  let mut1 = arr1;
  let mut2 = arr2;

  while (mut1.length !== 0 || mut2.length !== 0) {
    if (mut1[0] < mut2[0]) {
      newArr.push(mut1[0]);
      mut1 = mut1.slice(1);
    } else {
      newArr.push(mut2[0]);
      mut2 = mut2.slice(1);
    }
  }

  if (mut1.length === 0) {
    newArr.concat(mut2);
  } else {
    newArr.concat(mut1);
  }

  return newArr;
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    let splitArrs = split(array);
  }
}
