export class Car {
    model ;
    year ; 

    constructor(model,year){
        this.model=model;
        this.year=year; 
    }
    toString(){
        return `Car model is: ${this.model} and the year is: ${this.year}`
    }
}

