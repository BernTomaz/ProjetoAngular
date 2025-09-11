import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
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

  constructor(private fb: FormBuilder) {}

  ngOnInit(){

  this.cadastroForm = this.fb.group({
    nome: [''],
    cpf: [''],
    email: [''],
    senha: [''],
    senhaConfirmacao: ['']
  });
  }

  adicionarUsuario(){
        this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
  }

}
