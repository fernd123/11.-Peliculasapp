import { URL_IMAGES } from './../app.constants';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen'
})
export class ImagenPipe implements PipeTransform {

  transform(image: any, args?: any): any {
    if(image != null && image.poster_path != undefined && image.poster_path.length != 0){
      return `${URL_IMAGES}/${image.poster_path}`;
    }else  if(image != null && image.backdrop_path != undefined && image.backdrop_path.length != 0){
      return `${URL_IMAGES}/${image.backdrop_path}`;
    }else{
      return 'assets/img/noimage.png';
    }
  }

}
