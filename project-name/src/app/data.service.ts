import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

    constructor(private dataService: DataService) { }
  
    songs = [
        'Hello', 'My Girl', 'All Night Long'
    ];


    myData() {
        return 'This is my jam, man!';
    }

}
