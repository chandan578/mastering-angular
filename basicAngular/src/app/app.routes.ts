import { Routes } from '@angular/router';
import { Veriables } from './components/veriables/veriables';
import { DataBinding } from './components/data-binding/data-binding';
import { DirectiveExp } from './components/directive-exp/directive-exp';
import { NotFound } from './components/not-found/not-found';
import { ControlFlow } from './components/control-flow/control-flow';
import { TemplateForm } from './components/template-form/template-form';

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
        path: 'controlflow',
        component: ControlFlow
    },
    {
        path: 'template-form',
        component: TemplateForm
    },
    {
        path: '**',
        component: NotFound
    }
];