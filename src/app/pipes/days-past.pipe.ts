import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysPast'
})
export class DaysPastPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date(); //get current date and time
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(todayWithNoTime-value) //returns value in miliseconds
    var dateDifferenceSeconds = dateDifference*0.001; 
    var daysPassed = dateDifferenceSeconds/86400;

    if (daysPassed >= 1 && todayWithNoTime > value){
      return daysPassed;
    }
    else{
      return 0;
    }
  }

  }


