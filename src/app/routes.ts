import { Routes } from '@angular/router';

import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Error404Component } from './pages/error404/error404.component';

export const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: '',  component: HomeComponent },
      { path: 'about',  component: AboutComponent },
      { path: 'contact',  component: ContactComponent },
      { path: '**',     component: Error404Component }
    ]
  }
];