import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/security/auth.guard';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  /* {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  }, */
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth-pages/auth-pages.module').then(m => m.AuthPagesModule),
  },
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    component: HomeComponent,
    /* canLoad: [AuthGuard], */
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
