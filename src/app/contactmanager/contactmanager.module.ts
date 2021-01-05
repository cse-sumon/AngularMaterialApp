import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './componets/toolbar/toolbar.component';
import { MainContentComponent } from './componets/main-content/main-content.component';
import { SidenavComponent } from './componets/sidenav/sidenav.component';


import { Routes, RouterModule } from '@angular/router';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './componets/notes/notes.component';
import { NewContactDialogComponent } from './componets/new-contact-dialog/new-contact-dialog.component';

const routes:Routes=[
  {path:'',component:ContactmanagerAppComponent,
  children:[
    {path:':id', component:MainContentComponent},
    {path:'', component:MainContentComponent}
  ]},  
  {path:'**' ,redirectTo:''}
];

@NgModule({
  declarations: [ContactmanagerAppComponent, ToolbarComponent, MainContentComponent, SidenavComponent, NotesComponent, NewContactDialogComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
  
  ],
  providers:[
    UserService,
  ]
})
export class ContactmanagerModule { }
