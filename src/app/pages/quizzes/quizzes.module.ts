import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzesRoutingModule } from './quizzes-routing.module';
import { QuizzesComponent } from './quizzes.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    QuizzesComponent
  ],
  imports: [
    CommonModule,
    QuizzesRoutingModule,
    RouterModule
  ]
})
export class QuizzesModule { }
