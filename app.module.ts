import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';



@NgModule({
    declarations: [AppComponent],
    imports: [NgModule, 
        CalendarModule, 
        CommonModule, 
        HttpClientModule, 
        FormsModule,
        GoogleMapsModule],
    providers: [],
    bootstrap: [AppComponent]
    
})
export class AppModule {

}