import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TatuajesComponent } from './components/tatuajes/tatuajes.component';
import { Tatuadores2Component } from './components/tatuadores2/tatuadores2.component';
import { TatuadorComponent } from './components/tatuador/tatuador.component';



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
        path: 'tatuajes',
        component: TatuajesComponent
    },
    {
        path: 'tatuador',
        component: TatuadorComponent
    }
];
