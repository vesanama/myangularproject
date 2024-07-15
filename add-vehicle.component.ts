import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent {
  vehicleForm: FormGroup;

  constructor(private fb: FormBuilder, private vehicleService: VehicleService) {
    this.vehicleForm = this.fb.group({
      make: [''],
      model: [''],
      year: ['']
    });
  }

  onSubmit() {
    this.vehicleService.addVehicle(this.vehicleForm.value).subscribe(response => {
      console.log('Vehicle registered', response);
    });
  }
}
