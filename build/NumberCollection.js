"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberCollection = void 0;
var NumberCollection = /** @class */ (function () {
    function NumberCollection(data) {
        this.data = data;
    }
    // now, we need to know the length of the data
    // we have to ways 
    // one
    NumberCollection.prototype.len = function () {
        return this.data.length;
        // kinda bad because we have to call it as a function
        // like
        // new NumberCollection(arr).len()  <-- bad
    };
    Object.defineProperty(NumberCollection.prototype, "length", {
        // class  has something called getter 
        get: function () {
            return this.data.length;
            // now we can just called 
            // new NumberCollection(arr).length with no ()
        },
        enumerable: false,
        configurable: true
    });
    NumberCollection.prototype.comparing = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    NumberCollection.prototype.swap = function (leftIndex, rightIndex) {
        var _a;
        _a = [this.data[rightIndex], this.data[leftIndex]], this.data[leftIndex] = _a[0], this.data[rightIndex] = _a[1];
    };
    return NumberCollection;
}());
exports.NumberCollection = NumberCollection;
