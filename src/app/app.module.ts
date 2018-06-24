import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployesComponent } from './employ/employes.component';
import { CreateEmployComponent } from './employ/create/create-employ.component';


const appRouter: Routes = [
  {path:'list', component: EmployesComponent},
  {path:'create', component: CreateEmployComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployesComponent,
    CreateEmployComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouter),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
