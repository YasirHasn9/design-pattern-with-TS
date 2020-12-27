
function bubbleSort(arr:number[]):number[]{
    // loop over the array 
    // pick 2 numbers in array and compare them
    // if the left > right: 
    //    switch places
    for(let i = 1 ; i < arr.length ; i++){
        let left: number = 0
        for(let j = 0 ; j < arr.length ; j++){
            if(arr[left] > arr[j]){
                [arr[left] , arr[j]] = [arr[j] , arr[left]]
                left ++
            }
        }
    }
    return arr
}



class Sorter{
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

    constructor( public collection:number[] | string ) {}
    // collection:number[] | string is called a union type

    // collection: number []
    // constructor(collection:number[]){
    //     this.collection = collection
    // }
    // when a function/method return nothing , we use void

    sort = ():void => {
           /*
    now, the sort method works only with numbers 
    what if we need to use it with strings , also notice strings 
    are mutable, i mean yes we can access them but we can not change them
    so we need a way to figure this out

    */
        const { length } = this.collection
        for(let i = 0 ; i < length ; i++){
            for(let j = 0 ; j < length - i - 1 ; j++){
                // if collection is an array of numbers
                if(this.collection instanceof Array){
                    // now , ts knows that collection must be an array
                    if(this.collection[j] > this.collection[j + 1]){
                        let  temp = this.collection[j] 
                        this.collection[j] = this.collection[j+1] 
                        this.collection[j+1] = temp
                    }
                    
                }
              
                // if collection is string
                if(typeof this.collection === "string"){
                    // ts know collection must be string
                    this.collection.
                }
 
            }
        }

    }

 
}

let sorted = new Sorter([10,0,-3,1])
// once we called this method we should get the collection is sorted already
sorted.sort()
console.log("hello",sorted.collection)
