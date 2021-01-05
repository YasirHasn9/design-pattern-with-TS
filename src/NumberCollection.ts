export class NumberCollection {
    constructor(public data:number[]){}
    // now, we need to know the length of the data
    // we have to ways 
    // one
    len():number{
        return this.data.length
        // kinda bad because we have to call it as a function
        // like
        // new NumberCollection(arr).len()  <-- bad

    }

    // class  has something called getter 
    get length():number{
        return this.data.length
        // now we can just called 
        // new NumberCollection(arr).length with no ()
    }


    compare(leftIndex:number , rightIndex:number):boolean{
        return this.data[leftIndex] > this.data[rightIndex]
    }
    swap(leftIndex:number , rightIndex:number):void{
        [this.data[leftIndex], this.data[rightIndex]] = [this.data[rightIndex] , this.data[leftIndex]]
    }
}
