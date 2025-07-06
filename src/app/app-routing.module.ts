import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'quizzes/:category',
    loadChildren: () =>
      import('./pages/quizzes/quizzes.module').then(m => m.QuizzesModule)
  },
  {
  path: 'quiz/:id',
  loadChildren: () =>
    import('./pages/quiz/quiz.module').then(m => m.QuizModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
