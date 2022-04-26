import { Component, OnInit } from '@angular/core';
import { student } from './interface';

@Component({
  selector: 'app-side-b',
  templateUrl: './side-b.component.html',
  styleUrls: ['./side-b.component.css']
})
export class SideBComponent implements OnInit {
  showBody : boolean  = true
  red = "error"
  public title : string = "Welcome to myschool"
  Students! : student []
  constructor() { }

  ngOnInit(): void {
    this.Students = this.getStudentRecords()
    console.log(this.Students)
  }

  getStudentRecords () : student [] {
    return [
      {
        id : 1,
        name : "Shittu Tosin",
        age : 17,
        class : "SS 3"
      },
      {
        id : 2,
        name : "Olatunji Adeola",
        age : 15,
        class : "SS 3"
      },
      {
        id : 3,
        name : "Madojutimi Sodeeq",
        age : 18,
        class : "SS 3"
      },
      {
        id : 4,
        name : "Ibeni Evelyn",
        age : 17,
        class : "SS 3"
      }
    ]
  }

  onClick() {
    this.showBody = !this.showBody
  }
}
