import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { RouterModule  } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

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
  

  constructor() {}

  ngOnInit(){

   this.cadastroForm = new FormGroup({
   nome: new FormControl(''),
   cpf: new FormControl(''),
   email: new FormControl(''),
   senha: new FormControl(''),
    senhaConfirmacao: new FormControl('')
});
  }

  adicionarUsuario(){
    let x = this.cadastroForm.value;    
  }

}
