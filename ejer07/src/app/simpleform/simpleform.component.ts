import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'simple-form',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {
  user: User;
  
  constructor() { }

  ngOnInit() {
    this.user = new User('', '', '');
  }

  submitForm(form: any): void{
    console.log('Form Data: ');
    console.log(form);

    // Validations possible here
    this.user.firstName = form.firstName;
    this.user.lastName = form.lastName;
    this.user.gender = form.gender;
    this.user.hiking = form.hiking;
    this.user.running = form.running;
    this.user.swimming = form.swimming;

  }

}
