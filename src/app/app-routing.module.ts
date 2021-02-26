import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NoauthGuard } from './guards/noauth.guard';
import { AuthAdminGuard } from './guards/auth-admin.guard';
import { NoauthAdminGuard } from './guards/noauth-admin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo:'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule), canActivate:[NoauthGuard,NoauthAdminGuard]
  },
  {
    path: 'oficios',
    loadChildren: () => import('./pages/oficios/oficios.module').then( m => m.OficiosPageModule), canActivate:[NoauthGuard,NoauthAdminGuard]
  },
  {
    path: 'form-oficios',
    loadChildren: () => import('./pages/form-oficios/form-oficios.module').then( m => m.FormOficiosPageModule), canActivate:[NoauthGuard,NoauthAdminGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),canActivate:[AuthGuard]
  },
  {
    path: 'listverificacion',
    loadChildren: () => import('./pages/listverificacion/listverificacion.module').then( m => m.ListverificacionPageModule), canActivate:[NoauthGuard,NoauthAdminGuard]
  },
  {
    path: 'mantopreventivo',
    loadChildren: () => import('./pages/mantopreventivo/mantopreventivo.module').then( m => m.MantopreventivoPageModule), canActivate:[NoauthGuard,NoauthAdminGuard]
  },
  {
    path: 'solicitud',
    loadChildren: () => import('./pages/solicitud/solicitud.module').then( m => m.SolicitudPageModule), canActivate:[NoauthGuard,NoauthAdminGuard]
  },
  {
    path: 'ordentrabajo',
    loadChildren: () => import('./pages/ordentrabajo/ordentrabajo.module').then( m => m.OrdentrabajoPageModule), canActivate:[NoauthGuard,NoauthAdminGuard]
  },
  {
    path: 'documento',
    loadChildren: () => import('./pages/documento/documento.module').then( m => m.DocumentoPageModule), canActivate:[NoauthGuard,NoauthAdminGuard]
  },
  {
    path: 'form-listverificacion',
    loadChildren: () => import('./pages/form-listverificacion/form-listverificacion.module').then( m => m.FormListverificacionPageModule), canActivate:[NoauthGuard,NoauthAdminGuard]
  },
  {
    path: 'form-manto-prevetivo',
    loadChildren: () => import('./pages/form-manto-prevetivo/form-manto-prevetivo.module').then( m => m.FormMantoPrevetivoPageModule), canActivate:[NoauthGuard,NoauthAdminGuard]
  },
  {
    path: 'form-orden-trabajo',
    loadChildren: () => import('./pages/form-orden-trabajo/form-orden-trabajo.module').then( m => m.FormOrdenTrabajoPageModule), canActivate:[NoauthGuard,NoauthAdminGuard]
  },
  {
    path: 'form-solicitud',
    loadChildren: () => import('./pages/form-solicitud/form-solicitud.module').then( m => m.FormSolicitudPageModule), canActivate:[NoauthGuard,NoauthAdminGuard]
  },
  {
    path: 'notificacion',
    loadChildren: () => import('./pages/notificacion/notificacion.module').then( m => m.NotificacionPageModule), canActivate:[NoauthGuard,NoauthAdminGuard]
  },
  {
    path: 'login-admin',
    loadChildren: () => import('./pages/login-admin/login-admin.module').then( m => m.LoginAdminPageModule), canActivate:[AuthAdminGuard],
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule),canActivate:[NoauthAdminGuard,NoauthGuard]
  },
  {
    path: 'departamentos',
    loadChildren: () => import('./pages/departamentos/departamentos.module').then( m => m.DepartamentosPageModule), canActivate:[NoauthGuard,NoauthAdminGuard]
  },
  {
    path: 'form-departamento',
    loadChildren: () => import('./pages/form-departamento/form-departamento.module').then( m => m.FormDepartamentoPageModule), canActivate:[NoauthGuard,NoauthAdminGuard]
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule), canActivate:[NoauthGuard,NoauthAdminGuard]
  },
  {
    path: 'personal',
    loadChildren: () => import('./pages/personal/personal.module').then( m => m.PersonalPageModule), canActivate:[NoauthGuard,NoauthAdminGuard]
  },
  {
    path: 'form-personal',
    loadChildren: () => import('./pages/form-personal/form-personal.module').then( m => m.FormPersonalPageModule), canActivate:[NoauthGuard,NoauthAdminGuard]
  },
  {
    path: 'useradmin',
    loadChildren: () => import('./pages/useradmin/useradmin.module').then( m => m.UseradminPageModule), canActivate:[NoauthGuard,NoauthAdminGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
