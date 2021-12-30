import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationModule,
        ModalModule.forRoot(),
        FormsModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {
}
