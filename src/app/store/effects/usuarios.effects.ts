import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import * as actions from '../actions';

@Injectable()
export class UsuariosEffects {
  constructor(private actions$: Actions, private userSvc: UsuarioService) {}

  loadMovies$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<actions.usuariosAcciones>(actions.CARGAR_USUARIOS),
        switchMap(() => {
          return this.userSvc.getUsers().pipe(
            map((users) => {
             return new actions.CargarUsuariosSuccess(users);
            }),
            catchError(error => {
              return of(new actions.CargarUsuariosFail(error));
            })
          );
        })
      )
  );
}
