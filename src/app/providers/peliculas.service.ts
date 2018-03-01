import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Jsonp} from '@angular/http';
import {URL_MOVIEDB, ACCES_TOKEN, URL_IMAGES, URL_BUSQUEDA } from './../app.constants';

import 'rxjs/Rx';
@Injectable()
export class PeliculasService {

  constructor(private http:HttpClient,
        ) {
   }

   getCartelera(){

    let desde = new Date();
    let hasta = new Date();
    hasta.setDate( hasta.getDate() + 7 );

    let desdeStr = `${ desde.getFullYear() }-${ desde.getMonth()+1 }-${ desde.getDate() }`;
    let hastaStr = `${ hasta.getFullYear() }-${ hasta.getMonth()+1 }-${ hasta.getDate() }`;


    let url = `${ URL_MOVIEDB }/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }&api_key=${ ACCES_TOKEN }&language=es`;

    return this.http.get( url )
                .map( (res:any)=> res.results );

  }

  getPopularesNinos(){

    let url = `${ URL_MOVIEDB }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ ACCES_TOKEN }&language=es`;

    return this.http.get( url )
                .map( (res:any)=> res.results);
  }


  getPopulares(){
    let url = `${URL_MOVIEDB}/discover/movie?sort_by=popularity.desc&api_key=${ACCES_TOKEN}&language=es`; //
    console.log(url);
    return this.http.get(url)
            .map( (data:any) => {
              return data.results;
            });

  }

  getPelicula(peliculaId: string){
    let url = `${URL_MOVIEDB}/movie/${peliculaId}?api_key=${ACCES_TOKEN}&language=es-ES`;
    console.log(url);
    return this.http.get(url)
               .map(pelicula => {
                 return pelicula;
               });
    
  }

  getPeliculaByName(busqueda: string){
    let url = `${URL_BUSQUEDA}${busqueda}&language=es-ES`;
    return this.http.get(url)
    .map( (peliculas:any) => {
      return peliculas.results;
    });
  }
}
