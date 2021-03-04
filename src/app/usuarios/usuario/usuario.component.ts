import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { CargarUsuario } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit() {

    const id = this.route.params.subscribe((params)=>{

      const id = params['id']
      this.store.dispatch(new CargarUsuario(id));

    })


  }

}
