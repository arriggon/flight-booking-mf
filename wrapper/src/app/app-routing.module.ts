import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindPageComponent } from './pages/find-page/find-page.component';

const routes: Routes = [
  {path: 'find', component: FindPageComponent},
  {path: '', redirectTo: '/find', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
