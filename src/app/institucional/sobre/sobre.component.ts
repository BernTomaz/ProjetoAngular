import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ Importa o RouterModule para usar as rotas

@Component({
  selector: 'app-sobre',
  standalone: true, // ✅ Precisa disso também
  templateUrl: './sobre.component.html',
  imports: [RouterModule] // ✅ Importa o RouterModule para usar as rotas
})
export class SobreComponent { }
