function forEachCustom(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}
array=[1,2,3,4,5]
forEachCustom(array, (a,b,c)=>{console.log(`At index ${b} , element ${a} is present`)
})

