import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { ProdutosService } from './produtos/produtos.service';
// import { provideClientHydration, withEventReplay } from '@angular/platform-browser'; // 🔒 só usar com SSR (Angular Universal)
// Importa funcionalidades específicas para SSR (Server-Side Rendering), mas está comentado porque não é usado no momento.

export const appConfig: ApplicationConfig = {
  providers: [
    //ProdutosService,  
    provideRouter(routes),
    // Configura o roteamento da aplicação com as rotas definidas.

    provideZoneChangeDetection({ eventCoalescing: true }),
    // Otimiza a detecção de mudanças no Angular, agrupando eventos para melhorar o desempenho.

    // provideClientHydration(withEventReplay()) // 🚫 usar apenas com Angular Universal (SSR)
    // Configuração para SSR, mas está comentada porque não é aplicável no momento.
  ]
};

