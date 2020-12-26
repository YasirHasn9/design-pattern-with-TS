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
    function Sorter(collection) {
        var _this = this;
        this.collection = collection;
        this.sort = function () {
            var length = _this.collection.length;
            for (var i = 0; i < length; i++) {
                for (var j = 0; j < length - i - 1; j++) {
                    if (_this.collection[j] > _this.collection[j + 1]) {
                        var temp = _this.collection[j];
                        _this.collection[j] = _this.collection[j + 1];
                        _this.collection[j + 1] = temp;
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
