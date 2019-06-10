import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmdListComponent } from './cmd-list/cmd-list.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';
import { ProjectComponent } from './project/project.component';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [CmdListComponent, ProjectCreateComponent, ProjectUpdateComponent, ProjectComponent, LoginComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
