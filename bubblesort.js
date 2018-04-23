function bubbleSort (arr){
  if (arr.length === 0){
    return arr;
  } else {
    for (let i = 0 ; i < arr.length - 1; i++){
      for (let j = 0; j < arr.length - 1 - i; j++){
        let currentElem = arr[j];
        if (currentElem > arr[j + 1]){
          arr[j] = arr[j + 1];
          arr[j + 1] = currentElem;
        }
      }
    }
    return arr;
  }
}
