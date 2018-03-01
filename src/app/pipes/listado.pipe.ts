import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listado'
})
export class ListadoPipe implements PipeTransform {

  transform(value: any): string {
    let listado = "";
    for (let obj in value) {
      if (listado.length == 0) {
        listado = listado.concat(value[obj].name);
      } else {
        listado = listado.concat(', ', value[obj].name);
      }
    }
    return listado;
  }

}
