import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './components/entry/entry.component';
import { LogInComponent } from './components/log-in/log-in.component';

const routes: Routes = [
 {path:'logIn' ,component:LogInComponent} ,
 {path:'' , component:EntryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
