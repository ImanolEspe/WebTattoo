import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Tatuadores2Component } from './components/tatuadores2/tatuadores2.component';
import { DisenosComponent } from './components/disenos/disenos.component';
import { CitasComponent } from './components/citas1/citas.component';
import { ContactoComponent } from './components/contacto/contacto.component';



export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: 'home', 
        pathMatch: 'full',
    },
    {
        path: 'tatuadores2',
        component: Tatuadores2Component
    },
    {
        path: 'disenos',
        component: DisenosComponent
    },
    {
        path: 'citas',
        component: CitasComponent
    },
    {
        path: 'contacto',
        component: ContactoComponent
    },
    
];
