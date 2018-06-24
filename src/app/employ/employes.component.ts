import { Component, OnInit } from '@angular/core';
import { Employ } from '../models/employ.model';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent implements OnInit {

  employ: Employ[] = [
    {
      id: 1,
      name: "Henrik",
      gander: "male",
      email: "henrik-gevorgyan@mail.ru",
      phoneNumber: "098606467",
      contactPreferenc: "Email",
      dataOfBird: new Date('04/29/1994'),
      deparatment: "IT",
      isactive: true,
      photoPath: 'assets/img/jan.jpeg'
    },
    {
      id: 2,
      name: "Gago",
      gander: "male",
      email: "henrik-gevorgyan@mail.ru",
      phoneNumber: "094065929",
      contactPreferenc: "Email",
      dataOfBird: new Date('04/29/1994'),
      deparatment: "comp",
      isactive: true,
      photoPath: 'assets/img/jan.jpeg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
