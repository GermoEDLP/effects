import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// NgRx
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from "@ngrx/effects";
import { effectsArray } from './store/effects';

// Modulos personalizados
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    UsuariosModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot(effectsArray)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
