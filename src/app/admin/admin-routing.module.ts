import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from  './login/login.component';

import { ProjectComponent } from './project/project.component';
import { CmdListComponent } from './cmd-list/cmd-list.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';


const routes: Routes = [
    {
        path: 'admin',
        component: ProjectComponent,
        children: [
            {
                path: 'list',
                component: CmdListComponent
            },            
            {
                path: 'create',
                component: ProjectCreateComponent
            },
            {
                path: 'update',
                component: ProjectUpdateComponent
            },
            { path:  'login',component:  LoginComponent}
        ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }