import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-off',
  templateUrl: './sign-off.component.html',
  styleUrls: ['./sign-off.component.css']
})
export class SignOffComponent implements OnInit {
  signOffForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(value: FormGroup) {

  }

  private toFormGroup() {
    const formGroup = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(4)]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });

    return formGroup;
  }

}
