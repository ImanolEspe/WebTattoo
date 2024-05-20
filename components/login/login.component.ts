import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  admin: { user: string, password: string } = {
    user: 'Imanol',
    password: '123456'
  }

  mostrar: boolean = false

  formulario!: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({

      user: ['', Validators.required],
      password: ['', [Validators.required]],

    });
  }
  click() {
    this.check()
  }

  check() {
    if (this.formulario.get('user')?.value === this.admin.user && this.formulario.get('password')?.value === this.admin.password) {
      this.apiService.login(true)
      this.mostrar = false

    } else {
      this.mostrar = true
    }
  }
}
