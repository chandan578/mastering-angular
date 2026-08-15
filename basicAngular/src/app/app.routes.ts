import { Routes } from '@angular/router';
import { Veriables } from './components/veriables/veriables';
import { DataBinding } from './components/data-binding/data-binding';
import { DirectiveExp } from './components/directive-exp/directive-exp';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
    {
        path: '',
        component: DataBinding,
        pathMatch: 'full'
    },
    {
        path: 'variables',
        component: Veriables
    },
    {
        path: 'databinding',
        component: DataBinding
    },
    {
        path: 'directives',
        component: DirectiveExp
    },
    {
        path: '**',
        component: NotFound
    }
];