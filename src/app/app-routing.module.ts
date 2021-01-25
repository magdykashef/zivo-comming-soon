import { SoonComponent } from './soon/soon.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'soon', component: SoonComponent},
  {path: '', redirectTo: 'soon', pathMatch: 'full'},
  {path: '**', component: SoonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
