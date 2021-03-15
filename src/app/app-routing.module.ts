import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mod1Component } from './mod1/mod1.component';
import { Mod2Component } from './mod2/mod2.component';
import { Mod3Component } from './mod3/mod3.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {
    path:'',
    component: Mod1Component,
    loadChildren: ()=>
    import('./mod1/mod1.module').then((options) => options.Mod1Module),
    pathMatch: 'full'
  },
  {
    path:'mod1',
    component: Mod1Component,
    loadChildren: ()=>
    import('./mod1/mod1.module').then((options) => options.Mod1Module)
  },
  {
    path:'mod2',
    component: Mod2Component,
    loadChildren: ()=>
    import('./mod2/mod2.module').then((options) => options.Mod2Module)
  },
  {
    path:'mod3',
    component: Mod3Component,
    loadChildren: ()=>
    import('./mod3/mod3.module').then((options) => options.Mod3Module)
  },
  {
    path:'mod3/:param1',
    component: Mod3Component,
    loadChildren: ()=>
    import('./mod3/mod3.module').then((options) => options.Mod3Module)
  },
  {
    path:'404',
    component: Page404Component
  },
  {
    path:'**',
    redirectTo: '404',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, onSameUrlNavigation: 'reload', scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
