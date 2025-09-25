import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProdutoCardDetalheComponent } from "../componentes/produto-card-detalhe.component";
import { Produtos } from '../../../produtos/produto';
import { ProdutoCountComponent } from "../componentes/produto-count.component";

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, ProdutoCardDetalheComponent, ProdutoCountComponent]
})
export class ProdutoDashboardComponent implements OnInit {

  produtos: Produtos[] = [];

  ngOnInit(): void {
    this.produtos = [
      { id: 1, nome: 'Cadeira Gamer', descricao: 'Cadeira gamer ergonômica com apoio lombar.', imagem: 'cadeira.jpg', ativo: true, valor: 750, promocao: true, valorPromo: 699.90 },
      { id: 2, nome: 'Headset', descricao: 'Headset com microfone e som 7.1.', imagem: 'headset.jpg', ativo: true, valor: 250, promocao: false, valorPromo: 0 },
      { id: 3, nome: 'Monitor', descricao: 'Monitor Full HD 144Hz.', imagem: 'monitor.jpg', ativo: false, valor: 1200, promocao: true, valorPromo: 999.90 },
      { id: 4, nome: 'Mousepad', descricao: 'Mousepad gamer antiderrapante.', imagem: 'mousepad.jpg', ativo: true, valor: 50, promocao: false, valorPromo: 0 },
      { id: 5, nome: 'Notebook', descricao: 'Notebook para jogos de alto desempenho.', imagem: 'notebook.jpg', ativo: false, valor: 4500, promocao: true, valorPromo: 3999.90 },
      { id: 6, nome: 'Teclado Mecânico', descricao: 'Teclado mecânico RGB com switches azuis.', imagem: 'teclado.jpg', ativo: false, valor: 300, promocao: false, valorPromo: 0 },
      { id: 7, nome: 'Webcam', descricao: 'Webcam Full HD com microfone integrado.', imagem: 'webcam.jpg', ativo: true, valor: 180, promocao: true, valorPromo: 150 }
    ];
  }

  atualizarStatus(event: Produtos) {
    event.ativo = !event.ativo;
  }
  
}
