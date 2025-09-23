import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,  } from '@angular/router';
import { ProdutoDashboardComponent } from './produto-dashboard.component';

const routes: Routes = [
  { path: '', component: ProdutoDashboardComponent }
];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild(routes)],

  exports: [
    RouterModule
  ]
})


export class ProdutoRoutingModule { }
