"use strict";
function bubbleSort(arr) {
    var _a;
    // loop over the array 
    // pick 2 numbers in array and compare them
    // if the left > right: 
    //    switch places
    for (var i = 1; i < arr.length; i++) {
        var left = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[left] > arr[j]) {
                _a = [arr[j], arr[left]], arr[left] = _a[0], arr[j] = _a[1];
                left++;
            }
        }
    }
    return arr;
}
var Sorter = /** @class */ (function () {
    /*
    now this function only works with numbers , but what about others data types ?

    */
    //    this code is equivalent to the below snippet of code 
    // we deleted to the definition of the collection 
    // also we deleted the this.collection = collection inside 
    // when we use the | in ts, it means it only allows to us to compare these 
    // properties that are common to both an array of numbers and string
    // so simply , when using | in ts , we can only access the properties that present 
    // on both 
    // long story short , ts will find the feature and the syntax that are allowed 
    // around both of these types as well 
    function Sorter(collection) {
        var _this = this;
        this.collection = collection;
        // collection:number[] | string is called a union type
        // collection: number []
        // constructor(collection:number[]){
        //     this.collection = collection
        // }
        // when a function/method return nothing , we use void
        this.sort = function () {
            /*
     now, the sort method works only with numbers
     what if we need to use it with strings , also notice strings
     are mutable, i mean yes we can access them but we can not change them
     so we need a way to figure this out
 
     */
            var length = _this.collection.length;
            for (var i = 0; i < length; i++) {
                for (var j = 0; j < length - i - 1; j++) {
                    // if collection is an array of numbers
                    if (_this.collection instanceof Array) {
                        // now , ts knows that collection must be an array
                        if (_this.collection[j] > _this.collection[j + 1]) {
                            var temp = _this.collection[j];
                            _this.collection[j] = _this.collection[j + 1];
                            _this.collection[j + 1] = temp;
                        }
                    }
                    // if collection is string
                    if (typeof _this.collection === "string") {
                        // ts know collection must be string
                        _this.collection.
                        ;
                    }
                }
            }
        };
    }
    return Sorter;
}());
var sorted = new Sorter([10, 0, -3, 1]);
// once we called this method we should get the collection is sorted already
sorted.sort();
console.log("hello", sorted.collection);
