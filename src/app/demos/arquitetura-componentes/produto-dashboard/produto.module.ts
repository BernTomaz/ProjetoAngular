import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoDashboardComponent } from './produto-dashboard.component';
import { ProdutoRoutingModule } from './produto.route';


@NgModule({
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    ProdutoDashboardComponent
  ],
  exports: [
    ProdutoDashboardComponent
  ]
})

export class ProdutoModule {}