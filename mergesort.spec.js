describe('Split Array function', function() {

  it('is able to split an array into two halves', function() {
    let arr = [6,8,3,5,1,78,5];

    expect(split ( arr )).toEqual( [[6,8,3], [5,1,78,5]] ); // odd
    expect(split ( [6,8,3,20,5,1,78,5] )).toEqual( [[6,8,3,20], [5,1,78,5]]); // even
  });

});


describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge( [3,6,8,20], [1,5,5,78] )).toEqual( [1,3,5,5,6,8,20,78]); // sorted
  });
});


describe('Merge Sort function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(mergeSort([3,17,8,20,5,5,78])).toEqual( [1,3,5,5,8,17,20,78]); // even
  });
});
