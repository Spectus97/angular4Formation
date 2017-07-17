import { IPerson } from './shared/models/IPerson.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  public admin : IPerson;

  constructor(){
    this.admin = null;
  }

  ngOnInit(){
    this.admin = {
      firstname: "Rodolphe",
      lastname: "Vanderaspoilden"
    };
  }

  deletePerson(perso : IPerson){
    this.admin = {
      firstname: "",
      lastname: ""
    };
  }

}
