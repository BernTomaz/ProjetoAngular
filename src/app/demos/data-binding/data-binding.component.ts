import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ Importa o RouterModule para usar as rotas
import { FormsModule } from '@angular/forms'; // ✅ Importa o FormsModule
import { CommonModule } from '@angular/common'


@Component({
  selector: 'app-data-binding',
  standalone: true,
  templateUrl: './data-binding.component.html',
  imports: [
    RouterModule, // ✅ Adiciona o RouterModule às importações do componente
     FormsModule, // ✅ Adiciona o FormsModule às importações do componente
     CommonModule // ✅ Adiciona o CommonModule às importações do componente
     ] 
  
})

export class DataBindingComponent {
  public contadorClique: number = 0;
  public urlImagem: string = 'https://picsum.photos/200/300';
  public nome: string = '';


  adicionarClique() {
    this.contadorClique++;     
  }

  Zerarcontador() {
    this.contadorClique = 0;
  }

  keyUp(event: any) {

    this.nome = event.target.value; 
    
  }

}