import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  clienteForm: FormGroup;

  constructor(private fb: FormBuilder, private clienteService: ClienteService) {
    this.clienteForm = this.fb.group({
      nombre: [''],
      email: [''],
      contactConsent: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    this.clienteService.addCliente(this.clienteForm.value).subscribe(response => {
      console.log('Cliente registrado', response);
    });
  }
}
