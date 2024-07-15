
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { VehicleDetailComponent } from './components/vehicle-detail/vehicle-detail.component';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { ClienteComponent } from './components/cliente/cliente.component';

const routes: Routes = [
  { path: 'vehicles', component: VehicleListComponent },
  { path: 'vehicle/:id', component: VehicleDetailComponent },
  { path: 'add-vehicle', component: AddVehicleComponent },
  { path: 'clientes', component: ClienteComponent },
  { path: '', redirectTo: '/vehicles', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
