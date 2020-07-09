import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {ProdutoCrudComponent} from './views/produto-crud/produto-crud.component';
import {CriarProdutoComponent} from './components/produto/criar-produto/criar-produto.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "produtos",
    component: ProdutoCrudComponent
  },
  {
    path: "produtos/criar",
    component: CriarProdutoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
