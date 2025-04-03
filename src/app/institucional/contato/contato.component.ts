import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contato',
  standalone: true, // ✅ Precisa disso porque você não está usando NgModule
  templateUrl: './contato.component.html',
  imports: [RouterModule] // ✅ Importa o RouterModule para usar as rotas
})
export class ContatoComponent { }
