import { Routes } from '@angular/router';
import { MainComponent } from './features/main/main.component';
import { InicioComponent } from './features/inicio/inicio.component';

export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { 
        path: 'main', 
        component: MainComponent,
        children: [
            { path: 'inicio', component: InicioComponent }
        ]
    }
];