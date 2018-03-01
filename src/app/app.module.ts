import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';

// Componentes
import { HomeComponent } from './components/home/home.component';
import { GaleriaComponent } from './components/home/galeria.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

// Pipes
import { ListadoPipe } from './pipes/listado.pipe';
import { ImagenPipe } from './pipes/imagen.pipe';
import { Max100Pipe } from './pipes/max100.pipe';

// Services
import { PeliculasService } from './providers/peliculas.service';

// Rutas
import { APP_ROUTING } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GaleriaComponent,
    NavbarComponent,
    BusquedaComponent,
    Max100Pipe,
    PeliculaComponent,
    ListadoPipe,
    ImagenPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
