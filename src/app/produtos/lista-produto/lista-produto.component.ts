import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutosService } from '../produtos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-produto',
  standalone: true,
  templateUrl: './lista-produto.component.html',
  imports: [CommonModule]
})
export class ListaProdutoComponent implements OnInit {
  public produtos: Produto[] = [];

  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    this.produtosService.obterProdutos().subscribe({
      next: (produtos) => (this.produtos = produtos),
      error: (err) => console.log(err),
      complete: () => console.log('Requisição concluída')
    });
  }

  // trackBy para o *ngFor
  trackById(index: number, p: Produto): string {
    return p.id; // use um identificador único
  }
}

