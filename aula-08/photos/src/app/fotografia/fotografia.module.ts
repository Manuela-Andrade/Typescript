import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FotoComponent } from "./foto/foto.component";
import { FotoformComponent } from "./fotoform/fotoform.component";
import { FotolistComponent } from "./fotolist/fotolist.component";

@NgModule({
    declarations:[
        FotoComponent,
        FotolistComponent,
        FotoformComponent
    ],
    exports:[
        FotoComponent
    ],
    imports: [
        BrowserModule
    ]
})

export class FotografiaModule{

}

//Como agrupar os componentes foto, fotofor e fotlist neste modulo