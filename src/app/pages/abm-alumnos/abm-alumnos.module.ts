import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbmAlumnosRoutingModule } from './abm-alumnos-routing.module';

import { AltaModificacionAlumnosComponent } from './abm-alumnos/alta-modificacion-alumnos/alta-modificacion-alumnos.component';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';


@NgModule({
  declarations: [
    AbmAlumnosComponent,
    AltaModificacionAlumnosComponent
  ],
  imports: [
    CommonModule,
    AbmAlumnosRoutingModule
  ],
})
export class AbmAlumnosModule { }
