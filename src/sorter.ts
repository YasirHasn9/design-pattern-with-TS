
import {NumberCollection} from "./NumberCollection"

export class Sorter{
    constructor( public collection : NumberCollection ) {}

    sort() :void {
        const { length } = this.collection // --> const length = this.collection.length
        for(let i = 0 ; i < length ; i++){
            for(let j = 0 ; j < length - i - 1 ; j++){
                if(this.collection.comparing(j , j +1)){
                    this.collection.swap(j , j + 1)
                }
            }
        }

    }
}

