import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'max100'
})
export class Max100Pipe implements PipeTransform {

  transform(value: string): string {
    
    let newValue = "";
    if(value.length > 150){
      newValue = `${value.substring(0, 150)}...`;
    }else{
      newValue = value;
    }

    return newValue;
  }

}
