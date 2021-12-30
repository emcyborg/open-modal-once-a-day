import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ModalModule} from "ngx-bootstrap/modal";

import {AppComponent} from './app.component';
import { ModalContentComponent } from './modal-content/modal-content.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ModalModule.forRoot(),
        FormsModule
    ],
    declarations: [AppComponent, ModalContentComponent],
    bootstrap: [AppComponent],
})
export class AppModule {
}
