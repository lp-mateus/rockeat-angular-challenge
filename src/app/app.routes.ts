import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProdutoDetalhesComponent } from './pages/produto-detalhes/produto-detalhes.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'produtoDetalhes', component: ProdutoDetalhesComponent },
  { path: '**', redirectTo: '/dashboard' },
];
