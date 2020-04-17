import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProtectedComponent } from './protected/protected.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { CallApiComponent } from './call-api/call-api.component';
import { SilentRenewComponent } from './silent-renew/silent-renew.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
        path: 'protected',
        component: ProtectedComponent,
        canActivate: [AuthGuardService]
    },
    {
      path: 'auth-callback',
      component: AuthCallbackComponent
    },
    {
      path: 'call-api',
      component: CallApiComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: 'silent',
      component: SilentRenewComponent,
    },
    {
      path: '*',
      component: AppComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }