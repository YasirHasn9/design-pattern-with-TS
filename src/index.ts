
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
    
    constructor( public collection:number[]) {

    }

    sort = ():void => {
        const { length } = this.collection
        for(let i = 0 ; i < length ; i++){
            for(let j = 0 ; j < length - i - 1 ; j++){
                if(this.collection[j] > this.collection[j + 1]){
                    let  temp = this.collection[j] 
                    this.collection[j] = this.collection[j+1] 
                    this.collection[j+1] = temp
                }

            }
        }

    }
}

let sorted = new Sorter([10,0,-3,1])
// once we called this method we should get the collection is sorted already
sorted.sort()
console.log("hello",sorted.collection)
