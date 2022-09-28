import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private router: Router) { }

  departments = [
    { "id": 1, "name": 'angular' },
    { "id": 2, "name": 'react' },
    { "id": 3, "name": 'css' },
    { "id": 4, "name": 'html' },
  ]

  ngOnInit(): void {
  }

  onSelect(dep: { id: any; }) {
    this.router.navigate(['/department', dep.id])
  }

}
