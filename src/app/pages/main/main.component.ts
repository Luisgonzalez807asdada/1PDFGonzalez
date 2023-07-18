import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  userModel: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.userModel = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: [''],

    });
} 
submitForm(){
    console.log(this.userModel);
  }
}
