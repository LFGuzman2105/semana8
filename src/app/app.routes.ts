import { Routes } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaComponent } from './components/tabla/tabla.component';

export const routes: Routes = [
    { path: 'formulario', component: FormularioComponent },
    { path: 'tabla', component: TablaComponent },
    { path: '', redirectTo: '/formulario', pathMatch: 'full' }
];