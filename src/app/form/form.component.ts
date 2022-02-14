import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { User } from '../user-class/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  searchName!:string;
  
  constructor() { }

@Output() searchOutput = new EventEmitter<User> ()

userSearch = new User("","","",0,0,"","","",0,"",new Date())
  ngOnInit(): void {
  }

  search(){
    this.searchOutput.emit(this.userSearch)
    
  }

}
