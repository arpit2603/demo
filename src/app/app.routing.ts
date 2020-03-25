import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './appcomponents/home/app.home';
import { HeaderComponent } from './appcomponents/header/app.header';


const arr: Routes = [
    {path: '', redirectTo :'/' ,  pathMatch: 'full'},
    {path: 'home' , component: HomeComponent},
    {path: 'header' , component: HeaderComponent}
   ];

   export const routing = RouterModule.forRoot(arr);