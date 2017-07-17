import { NamePipe } from './filters/name.filter';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [],
    exports: [NamePipe],
    declarations: [
        NamePipe
    ],
    providers: [],
})
export class sharedModule { }
