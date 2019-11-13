import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material';
import {TodoIterface} from './todo.iterface';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule,
        FormsModule
    ],
    providers: [TodoIterface],
    bootstrap: [AppComponent]
})
export class AppModule {
}
