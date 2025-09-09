import { Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component'; //  Importa a página inicial
import { ContatoComponent } from './institucional/contato/contato.component'; //  Importa a página de contato
import { SobreComponent } from './institucional/sobre/sobre.component'; //  Importa a página sobre
import { DataBindingComponent } from './demos/data-binding/data-binding.component'; //  Importa o componente de data binding
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component'; //  Importa o componente de lista de produtos
import { CadastroComponent } from './demos/reactiveforms/cadastro/cadastro.component'; //  Importa o componente de cadastro

export const routes: Routes = [
    { path: '', component: HomeComponent }, //  Quando o usuário acessar a raiz ('/'), o HomeComponent será carregado no <router-outlet>
    { path: 'home', component: HomeComponent }, //  Quando o usuário acessar '/home', o HomeComponent será carregado no <router-outlet>
    { path: 'contato', component: ContatoComponent }, //  Quando acessar '/contato', carrega ContatoComponent
    { path: 'sobre', component: SobreComponent }, //  Quando acessar '/sobre', carrega SobreComponent
    { path: 'data-binding', component: DataBindingComponent }, //  Quando acessar '/data-binding', carrega DataBindingComponent
    { path: 'produtos', component: ListaProdutoComponent }, //  Quando acessar '/produtos', carrega ListaProdutoComponent
    { path: 'cadastro', component: CadastroComponent }, //  Quando acessar '/cadastro', carrega CadastroComponent
];
