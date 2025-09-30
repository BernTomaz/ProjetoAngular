import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuComponent } from "./menu/menu.component";
import { FooterComponent } from "./footer/footer.component";
import { NotFoundComponent } from "./not-found/not-found.component";



@NgModule(
    {       
        imports: [            
            CommonModule,            
            MenuComponent,
            FooterComponent,
            NotFoundComponent
        ],
      
        exports: [
            MenuComponent,
            FooterComponent,
            NotFoundComponent
        ]
    }
)
export class NavegacaoModule {}