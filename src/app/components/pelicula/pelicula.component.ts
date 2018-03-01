import { PeliculasService } from './../../providers/peliculas.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  peliculaId: string;
  regresarA: string;
  pelicula: any = {};

  constructor(private router: Router,
    private activatedRouter: ActivatedRoute,
    private peliculasService: PeliculasService) {
    this.activatedRouter.params.subscribe(params => {
      this.peliculaId = params['id'];
      this.regresarA = params['pag'];
      this.peliculasService.getPelicula(this.peliculaId)
        .subscribe(pelicula => {
          this.pelicula = pelicula;
        });
    });

  }


  ngOnInit() {
  }


  regresar() {
    this.router.navigate([this.regresarA]);
  }

}
