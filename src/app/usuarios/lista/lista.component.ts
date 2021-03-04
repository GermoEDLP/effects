import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CargarUsuarios } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';
import { UsuariosState } from 'src/app/store/reducers';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {

    this.store.select('usuarios').subscribe((data: UsuariosState)=>{
      this.usuarios = data.users;
    })

     this.store.dispatch( new CargarUsuarios() );

  }

}
