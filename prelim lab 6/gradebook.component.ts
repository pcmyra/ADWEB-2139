import { Component, OnInit,} from '@angular/core';

@Component({
  selector: 'app-gradebook',
  templateUrl: './gradebook.component.html',
  styleUrls: ['./gradebook.component.css']
})
export class GradebookComponent implements OnInit {

  //ngif
  isLogIn:boolean = false;
  isLogOut:boolean=true;

  //ngFor

  list = [1,2,3,4,5];


  studentArr: any[]=[
    {"id":1,"name":"chambe"},
    {"id":2,"name":"malou"},
    {"id":3,"name":"mario"},
    {"id":4,"name":"niko"},
  ];

  trackByData(index:number,studentArr:any):number{
    return studentArr.id;
  }

  staff=[
    {firstname: 'myra', lastname: 'cuyagbo',email: 'pcmyra03@gmail.com', role:'admin'},
    {firstname: 'almond', lastname: 'rosos',email: 'arosos@gmail.com', role:'admin'},
    {firstname: 'chandler', lastname: 'hallow',email: 'challow@gmail.com', role:'user'},
    {firstname: 'rhean', lastname: 'de leon',email: 'rheandl@gmail.com', role:'user'},
  ]


  //ngswitch
  logInName='admin';

  constructor() { }

  ngOnInit(): void {
  }

}
