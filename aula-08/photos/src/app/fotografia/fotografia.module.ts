import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";

import { FotoComponent } from "./foto/foto.component";
import { FotoformComponent } from "./fotoform/fotoform.component";
import { FotolistComponent } from "./fotolist/fotolist.component";

//Feature Module - é o modulo que agrupa componentes.
@NgModule({
    declarations:[
        FotoComponent,
        FotolistComponent,
        FotoformComponent
    ],
    exports:[
        FotoComponent,
        FotolistComponent
    ],
    imports: [
        SharedModule

    ]
})

export class FotografiaModule{

}

//Como agrupar os componentes foto, fotofor e fotlist neste modulo