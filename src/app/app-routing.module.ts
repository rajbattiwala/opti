import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './my-components/home/home.component';
import { ItemMasterRegisterComponent } from './my-components/item-master-register/item-master-register.component';
import { ItemMasterComponent } from './my-components/item-master/item-master.component';
import { LoginComponent } from './my-components/login/login.component';
import { RegisterComponent } from './my-components/register/register.component';
import { MetalMasterComponent } from './my-components/metal-master/metal-master.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'item-master', component: ItemMasterComponent},
  {path: 'item-master/:id', component: ItemMasterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'item-master-register', component: ItemMasterRegisterComponent},
  {path: 'metal-master', component: MetalMasterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [RegisterComponent, LoginComponent, ItemMasterComponent, HomeComponent, ItemMasterRegisterComponent, MetalMasterComponent]
