import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import * as actions from '../actions';

@Injectable()
export class UsuarioEffects {
  constructor(private actions$: Actions, private userSvc: UsuarioService) {}

  cargarUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType<actions.usuarioAcciones>(actions.CARGAR_USUARIO),
      switchMap((action: actions.CargarUsuario) => {
        return this.userSvc.getUser(action.id).pipe(
          map((user: any) => {
            return new actions.CargarUsuarioSuccess(user);
          }),
          catchError((error) => {
            return of(new actions.CargarUsuarioFail(error));
          })
        );
      })
    )
  );
}
