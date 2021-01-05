import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './contactmanager/componets/sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';


const routes:Routes=[
  // {path:'demo',loadChildren:'./demo/demo.module#DemoModule'},
  {path:'contactmanager',loadChildren:()=>import('./contactmanager/contactmanager.module').then(m=>m.ContactmanagerModule)},
  {path:'demo',loadChildren:()=>import('./demo/demo.module').then(m=>m.DemoModule)},
  {path:'**' ,redirectTo:'contactmanager'},
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
