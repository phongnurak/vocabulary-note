import { Routes } from '@angular/router';
import { NoteComponent } from './components/note/note.component';
import { InvalidPageComponent } from './components/invalid-page/invalid-page.component';

export const routes: Routes = [
    {
        redirectTo: '/vocabulary',
        path: '',
        pathMatch: 'full'
    },
    {
        path: 'vocabulary', 
        component: NoteComponent,
    },
    {
        path: '**',
        component: InvalidPageComponent
    },
    
];
