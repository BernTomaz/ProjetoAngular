import { Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component'; // ✅ Importa a página inicial
import { ContatoComponent } from './institucional/contato/contato.component'; // ✅ Importa a página de contato
import { SobreComponent } from './institucional/sobre/sobre.component'; // ✅ Importa a página sobre

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // ✅ Redireciona a raiz ('/') para '/home'
    { path: 'home', component: HomeComponent }, // ✅ Quando o usuário acessar '/home', o HomeComponent será carregado no <router-outlet>
    { path: 'contato', component: ContatoComponent }, // ✅ Quando acessar '/contato', carrega ContatoComponent
    { path: 'sobre', component: SobreComponent } // ✅ Quando acessar '/sobre', carrega SobreComponent
];
