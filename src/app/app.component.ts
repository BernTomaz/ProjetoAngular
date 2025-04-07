import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./navegacao/menu/menu.component";
import { FooterComponent } from "./navegacao/footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
 
})
export class AppComponent {
  title = 'MeuProjetoAngular';
}
