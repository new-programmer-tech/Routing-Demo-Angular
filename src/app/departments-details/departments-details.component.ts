import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';

@Component({
  selector: 'app-departments-details',
  templateUrl: './departments-details.component.html',
  styleUrls: ['./departments-details.component.css']
})
export class DepartmentsDetailsComponent implements OnInit {

  public depId!: number;

  constructor(private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //snapshot approach
    // let id = this.activeRoute.snapshot.paramMap.get('id');
    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      let id = Number(params.get('id'));
      this.depId = id;
      console.log(typeof (id));
    }
    )
  }

  onPrevious() {
    let preId: number = this.depId - 1;
    console.log(preId);

    this.router.navigate(['/department', preId])
  }

  onNext() {
    let nextId: number = this.depId + 1;
    this.router.navigate(['/department', nextId])
  }
}
