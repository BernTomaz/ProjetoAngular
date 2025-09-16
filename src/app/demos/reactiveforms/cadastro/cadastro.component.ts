import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { RouterModule  } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Usuario } from './models/usuario';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  templateUrl: './cadastro.component.html',
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule,
    ReactiveFormsModule,
    NgxMaskDirective
  ],
  providers: [provideNgxMask()]
})

export class CadastroComponent implements OnInit {   


  cadastroForm: FormGroup;
  usuario: Usuario;
  formResult: string = '';
  

  constructor(private fb: FormBuilder) {}

  


  ngOnInit(){ 


   this.cadastroForm = this.fb.group({
    nome: ['', Validators.required],
    cpf: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
    senhaConfirmacao: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
    },
    { validators: this.passwordMatchValidator }
   );
  }

    passwordMatchValidator(group: AbstractControl) {
    const senha = group.get('senha')?.value;
    const senhaConfirmacao = group.get('senhaConfirmacao')?.value;
    return senha === senhaConfirmacao ? null : { mismatch: true };
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