import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProdutoCardDetalheComponent } from "../componentes/produto-card-detalhe.component";
import { Produtos } from '../../../produtos/produto';
import { ProdutoCountComponent } from "../componentes/produto-count.component";
import { fromEvent, Observable } from 'rxjs';

//decorator do componente
@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, ProdutoCardDetalheComponent, ProdutoCountComponent]
})

//Componente principal do dashboard de produtos
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {

  //lista de produtos
  produtos: Produtos[] = [];

  //contador de produtos
  @ViewChild(ProdutoCountComponent, { static: false }) contador: ProdutoCountComponent;

  //referência a um elemento da tela
  @ViewChild('teste', {static: false }) mensagemTela: ElementRef ;

  //referência a uma lista de elementos da tela
  @ViewChildren(ProdutoCardDetalheComponent) botoes: QueryList<ProdutoCardDetalheComponent>;

  //inicializa a lista de produtos
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

  //método chamado após a inicialização da view
  ngAfterViewInit(): void {

    //exibe no console a quantidade de produtos ativos
    console.log('Produtos ativos: ' , this.contador.produtos);
    
    //exibe no console a lista de produtos dos botões
    console.log(this.botoes);
    this.botoes.forEach(p => {    
      console.log(p.produto);
    });
    
    
    // Exemplo de uso do fromEvent para capturar cliques em um elemento da tela
    let clickTexto: Observable<any> = fromEvent(this.mensagemTela.nativeElement, 'click');
    clickTexto.subscribe(() => {
      alert('Mensagem clicada!');
      return
    });
  }  

//método para atualizar o status do produto
atualizarStatus(event: Produtos) {
  event.ativo = !event.ativo;
}

//método para notificar o usuário
notificarUsuario(produto: Produtos) {
  alert(`Avisaremos assim que o produto "${produto.nome}" chegar!`);
}


}
