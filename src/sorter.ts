
// as long as other modules satisfy the Sortable interface, then its good to do the operation
// now , any object that have the length, compare and swap with these type annotation can work with the Sort class
interface Sortable{
    length:number,
    compare(leftIndex:number, rightIndex:number):boolean,
    swap(leftIndex:number, rightIndex:number):void
}

export class Sorter{
    constructor( public collection : Sortable ) {}

    sort() :void {
        const { length } = this.collection // --> const length = this.collection.length
        for(let i = 0 ; i < length ; i++){
            for(let j = 0 ; j < length - i - 1 ; j++){
                if(this.collection.compare(j , j +1)){
                    this.collection.swap(j , j + 1)
                }
            }
        }

    }
}

