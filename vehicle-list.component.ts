import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
}

const VEHICLE_DATA: Vehicle[] = [
  // Datos de ejemplo
];

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'make', 'model', 'year'];
  dataSource = new MatTableDataSource<Vehicle>(VEHICLE_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
