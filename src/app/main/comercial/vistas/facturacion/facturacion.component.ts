import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.scss']
})
export class FacturacionComponent implements OnInit {
  public factruacionForm: FormGroup;
  public submitted = false;
  public actualizarCreditoFormData;

  constructor(
      private _formBuilder: FormBuilder,
      private _router: Router,
  ) { }

  ngOnInit(): void {
    this.factruacionForm = this._formBuilder.group({
      nombre: ['', [Validators.required]], //
      identificacion: ['', [Validators.required]], //
      celular: ['', [Validators.required]], //
      direccion: ['', [Validators.required]], //
      correo: ['', [Validators.required]], //
      descripcion: ['', [Validators.required]], //
      cantidad: ['', [Validators.required]], //
      valorTotal: ['', [Validators.required]], //
      facturaComercial: ['', [Validators.required]], //
    });
  }
  get facturacionControlsForm() {
    return this.factruacionForm.controls;
  }

  siguiente() {
    this.submitted = true;
    if (this.factruacionForm.invalid) {
      return;
    }
    this._router.navigate(['/comercial/documentos-habilitantes']);
  }
  subirDoc(event, key) {
    if (event.target.files && event.target.files[0]) {
      const doc = event.target.files[0];
      this.actualizarCreditoFormData.delete(`${key}`);
      this.actualizarCreditoFormData.append(`${key}`, doc, Date.now() + '_' + doc.name);
    }
  }
}
