import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { RouterModule  } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  templateUrl: './cadastro.component.html',
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule,
    ReactiveFormsModule
  ],

})
export class CadastroComponent implements OnInit {   


  cadastroForm: FormGroup;
  usuario: Usuario;
  formResult: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(){
   this.cadastroForm = this.fb.group({
    nome: ['', Validators.required],
    cpf: [''],
    email: ['', [Validators.required, Validators.email]],
    senha: [''],
    senhaConfirmacao: ['']
  });
  }

  adicionarUsuario(){
    if(this.cadastroForm.dirty && this.cadastroForm.valid){
        this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
        this.formResult = JSON.stringify(this.cadastroForm.value);
    }
    else{
      this.formResult = "Formulário inválido";
     }
   }
}