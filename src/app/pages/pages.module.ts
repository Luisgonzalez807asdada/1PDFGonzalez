import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AbmAlumnosModule } from './abm-alumnos/abm-alumnos.module';

import { FormsModule,ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AbmAlumnosModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PagesModule {

}
