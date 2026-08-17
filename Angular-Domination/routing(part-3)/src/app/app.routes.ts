import { Routes } from '@angular/router';


export const routes: Routes = [
    {path: '', loadComponent:()=>import('./pages/home/home').then((c)=>c.Home)},
    {path: 'user', 
        // component: User,
        loadComponent:()=>import('./pages/user/user').then((c)=>c.User), 
        children: [
            // {path: '', redirectTo: 'profile', pathMatch: 'full'},

            {path: 'profile', loadComponent:()=>import('./pages/profile/profile').then((c)=>c.Profile)},
            {path: 'setting', loadComponent:()=>import('./pages/setting/setting').then((c)=>c.Setting)},
        ]
    },
];
