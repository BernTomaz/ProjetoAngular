import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);


import { ProdutoRoutingModule } from './produto.route';
import { ProdutoDashboardComponent } from './produto-dashboard.component';
import { ProdutoCardDetalheComponent } from '../componentes/produto-card-detalhe.component';
import { ProdutoCountComponent } from '../componentes/produto-count.component';

@NgModule({
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    ProdutoDashboardComponent,
    ProdutoCardDetalheComponent,
    ProdutoCountComponent
  ],
  exports: [
    ProdutoDashboardComponent,
    ProdutoCountComponent
  ]
})

export class ProdutoModule {}