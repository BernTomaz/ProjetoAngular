import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produtos } from '../../../produtos/produto'; 


@Component({
  selector: 'app-produto-card-detalhe',
  templateUrl: './produto-card-detalhe.component.html',
  standalone: true,         
  imports: [CommonModule]  
})
export class ProdutoCardDetalheComponent {
  @Input() produto: Produtos;   

  @Output()
  status: EventEmitter<Produtos> = new EventEmitter<Produtos>();


  emitirEvento() {
    console.log('Evento emitido para o produto:', this.produto);
    this.status.emit(this.produto);
  }

}

