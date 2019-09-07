import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {
  signUpForm:FormGroup;
  

  constructor(private db:AngularFirestore,private fb:FormBuilder) { }

  ngOnInit() {    
    this.signUpForm=this.fb.group(
      {
        email:['',[Validators.required]],    
        password:[''],        
        phoneNumber:['']  
    }
    )  

  }

  onSubmit(){
    let user=this.signUpForm.value;
    console.log(user);
    console.log("Signup clicked")
  }

}
