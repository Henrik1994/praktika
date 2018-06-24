import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/categories.model';

@Component({
  selector: 'app-create-employ',
  templateUrl: './create-employ.component.html',
  styleUrls: ['./create-employ.component.css']
})
export class CreateEmployComponent implements OnInit {

  employ:any = {};
  category: Category[] = [
    {id: 1, name: "IT"},
    {id: 2, name: "Network"},
    {id: 3, name: "Developer"},
    {id: 4, name: "Java"},
  ];

  constructor() { }

  ngOnInit() {
    this.employ.select = "3";
  }


  addemploy(){
    console.log(this.employ);
  }

}
