import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produtos } from '../../../produtos/produto';

@Component({
    selector: 'produto-count',
    template: `
    
    <div>
        <h3>Produtos</h3>
        <div>

            produtos ativos: {{contadorAtivos()}} no total de {{produtos.length}} produtos <br><br>

        </div>            
    </div>`
        
        ,
    standalone: true,
    imports: [CommonModule]
})
export class ProdutoCountComponent {
    @Input() produtos: Produtos[];

    contadorAtivos(): number {
       if (!this.produtos) return 0;
       
       return this.produtos.filter((produto: Produtos) => produto.ativo).length;
    }

}
