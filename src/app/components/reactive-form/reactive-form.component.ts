import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators , ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  userForm : any;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit() : void {
    this.userForm = this.formBuilder.group({
      name:['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      address:['',Validators.required],
      mobile:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
      age:['',[Validators.required, Validators.min(20), Validators.max(50)]],
      gender:['',Validators.required]
    })
  }
  submitForm() : void{
    console.log("submited")
    if(this.userForm?.valid){
      console.log('Form data:', this.userForm.value);
    }
  }
}
