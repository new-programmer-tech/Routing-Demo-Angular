import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { DepartmentsDetailsComponent } from './departments-details/departments-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


const routes: Routes = [
  {
    path: 'department',
    component: DepartmentComponent
  },
  {
    path: 'employee-list',
    component: EmployeeListComponent
  },
  {
    path: 'department/:id',
    component: DepartmentsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
export const routingComponents =
  [EmployeeListComponent,
    DepartmentComponent,
    DepartmentsDetailsComponent
  ];
