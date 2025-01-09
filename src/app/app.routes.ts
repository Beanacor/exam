import { Routes } from '@angular/router';
import { SetAComponent } from './set-a/set-a.component';
import { SetBComponent } from './set-b/set-b.component';

export const routes: Routes = [
    {
        path: '',
        component: SetAComponent
    },
    {
        path: 'register',
        component: SetBComponent
    }
];