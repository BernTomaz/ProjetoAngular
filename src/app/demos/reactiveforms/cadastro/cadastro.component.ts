import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormControlName, FormGroup, FormsModule, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';
import { RouterModule  } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Usuario } from './models/usuario';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { DisplayMessage, GenericValidator, ValidationMessages } from './generic-form-validation';
import { fromEvent, merge, Observable } from 'rxjs';
import { NgBrazilValidators } from 'ng-brazil';

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


export class CadastroComponent implements OnInit, AfterViewInit { 

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  cadastroForm: FormGroup;
  usuario: Usuario;
  formResult: string = '';

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};

  
  constructor(private fb: FormBuilder) {
    this.validationMessages = {
      nome: {
        required: 'O Nome é obrigatório.',
        maxlength: 'O Nome deve possuir no máximo 15 caracteres.',
        minlength: 'O Nome deve possuir no mínimo 3 caracteres.'
      },
      cpf: {
        required: 'O CPF é obrigatório.',
        cpf: 'CPF inválido.'
      },
      email: {
        required: 'O Email é obrigatório.',
        email: 'O Email é inválido.'
},
      senha: {
        required: 'A Senha é obrigatória.',
        minlength: 'A Senha deve possuir no mínimo 6 caracteres.',
        maxlength: 'A Senha deve possuir no máximo 15 caracteres.',
        
      },
      senhaConfirmacao: {
        required: 'A Confirmação da Senha é obrigatória.',
        minlength: 'A Confirmação da Senha deve possuir no mínimo 6 caracteres.',
        maxlength: 'A Confirmação da Senha deve possuir no máximo 15 caracteres.',
        mustMatch: 'As senhas não conferem.'
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngAfterViewInit(): void {
    const controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));
     
    merge(...controlBlurs).subscribe(() => {
  this.displayMessage = this.genericValidator.processarMensagens(this.cadastroForm);
  });
  }

 ngOnInit() {
  this.cadastroForm = this.fb.group(
    {
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      senhaConfirmacao: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
    },
    { validators: this.MustMatch('senha', 'senhaConfirmacao') } // já aplica aqui
  );

     // 👉 popula mensagens no refresh da página
      this.displayMessage = this.genericValidator.processarMensagens(this.cadastroForm);
}


   MustMatch(controlName: string, matchingControlName: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const control = formGroup.get(controlName);
    const matchingControl = formGroup.get(matchingControlName);

    if (!control || !matchingControl) {
      return null;
    }
   
    if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
      return null;
    }
    
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }

    return null;
  };

 
}


  adicionarUsuario(){   
    if(this.cadastroForm.dirty && this.cadastroForm.valid){
        this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
        this.formResult = JSON.stringify(this.cadastroForm.value);        
    }
    else{
       this.formResult = "Formulário inválido";
      console.log('Formulário inválido');
     }
   }
}