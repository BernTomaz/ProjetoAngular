import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavegacaoModule } from './navegacao/navegacao.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavegacaoModule],
  templateUrl: './app.component.html',
 
})
export class AppComponent {
  title = 'MeuProjetoAngular';
}
