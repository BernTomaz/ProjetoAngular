import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // ✅ Permite que o Angular carregue componentes dinamicamente nas rotas
import { MenuComponent } from "./navegacao/menu/menu.component"; // ✅ Importa o menu
import { FooterComponent } from "./navegacao/footer/footer.component"; // ✅ Importa o rodapé

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [MenuComponent, FooterComponent, RouterOutlet], // ✅ O RouterOutlet é essencial para carregar os componentes das rotas!
  templateUrl: './app.component.html', // ✅ Define o template do componente
})
export class AppComponent {
  title = 'MeuProjetoAngular'; // Apenas um título para referência
}