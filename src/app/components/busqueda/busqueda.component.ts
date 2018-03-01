import { PeliculasService } from './../../providers/peliculas.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

  texto: string;
  peliculas = [];
  constructor(private peliculasService: PeliculasService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      if (params['texto'])
        this.texto = params['texto'];
        this.buscar();
    });

  }

  ngOnInit() {
  }

  buscar() {
    this.peliculasService.getPeliculaByName(this.texto)
      .subscribe(data => {
        console.log(data);
        this.peliculas = data;
      });
  }

  verPelicula(peliculaId: string, regresarA: string) {
    console.log(peliculaId);
    debugger;
    this.router.navigate(['/pelicula', peliculaId, regresarA]);
  }


}
