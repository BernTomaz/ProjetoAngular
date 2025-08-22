import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // substitui RouterModule.forRoot(...)
import { provideHttpClient } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
// Se quiser “globalizar” módulos baseados em NgModule:
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // se usar Material (opcional)

// Se tiver um serviço que NÃO usa providedIn: 'root', adicione aqui:
// import { ProdutoService } from './produtos/produtos.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    // Forms “global” (opcional; você também pode importar por componente)
    importProvidersFrom(FormsModule),
    // importProvidersFrom(BrowserAnimationsModule), // se precisar
    { provide: APP_BASE_HREF, useValue: '/' },
    // ProdutoService, // só se o serviço não tiver providedIn: 'root'
  ],
};
