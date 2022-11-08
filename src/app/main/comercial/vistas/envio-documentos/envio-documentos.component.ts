import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-envio-documentos',
  templateUrl: './envio-documentos.component.html',
  styleUrls: ['./envio-documentos.component.scss']
})
export class EnvioDocumentosComponent implements OnInit {
  public submitted = false;
  public envioForm: FormGroup;
  public actualizarCreditoFormData;
  constructor(
      private _formBuilder: FormBuilder,
      private _router: Router,
  ) { }

  ngOnInit(): void {
    this.envioForm = this._formBuilder.group({
      solicitudCredito: ['', [Validators.required]], //
      evaluacionCrediticia: ['', [Validators.required]], //
      documentoBuro: ['', [Validators.required]], //
      identificacion: ['', [Validators.required]], //
      papeletaVotacion: ['', [Validators.required]], //
      identificacionConyuge: ['', [Validators.required]], //
      papeletaVotacionConyuge: ['', [Validators.required]], //
      planillaDocimilio: ['', [Validators.required]], //
      mecanizado: ['', [Validators.required]], //
      matriculaVehiculo: ['', [Validators.required]], //
      impuestoPredial: ['', [Validators.required]], //
      autorizacion: ['', [Validators.required]], //
      fichaCliente: ['', [Validators.required]], //
      conveniosCuenta: ['', [Validators.required]], //
      pagare: ['', [Validators.required]], //
      tablaAmortizacion: ['', [Validators.required]], //
      seguroDesgravamen: ['', [Validators.required]], //
      gastosAdministrativos: ['', [Validators.required]], //
    });
  }
  subirDoc(event, key) {
    if (event.target.files && event.target.files[0]) {
      const doc = event.target.files[0];
      this.actualizarCreditoFormData.delete(`${key}`);
      this.actualizarCreditoFormData.append(`${key}`, doc, Date.now() + '_' + doc.name);
    }
  }
  get envioControlsForm() {
    return this.envioForm.controls;
  }

  enviar() {
    this.submitted = true;
    if (this.envioForm.invalid) {
      return;
    }
    this._router.navigate(['/comercial/guia-remision']);
  }

}
