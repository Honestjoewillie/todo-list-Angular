import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AboutComponent } from './components/pages/about/about.component';
import { TodoComponent } from './components/todo/todo.component';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
