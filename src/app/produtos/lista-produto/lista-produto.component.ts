import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';       
import { ProdutosService } from '../produtos.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-lista-produto',
  standalone: true,                                     // ✅ standalone
  imports: [CommonModule],                              // ✅ habilita *ngFor e currency
  templateUrl: './lista-produto.component.html',
})
export class ListaProdutoComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private produtosSrv: ProdutosService) {}

  ngOnInit(): void {
    this.produtosSrv.listar().subscribe((data) => (this.produtos = data));
  }

  trackById = (_: number, p: Produto) => p.id;
}
