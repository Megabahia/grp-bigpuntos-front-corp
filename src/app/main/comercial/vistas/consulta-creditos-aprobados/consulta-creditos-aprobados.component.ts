import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-consulta-creditos-aprobados',
    templateUrl: './consulta-creditos-aprobados.component.html',
    styleUrls: ['./consulta-creditos-aprobados.component.scss']
})
export class ConsultaCreditosAprobadosComponent implements OnInit {
    public submitted = false;
    public submittedCA = false;
    public pantalla = 1;
    public datosClienteForm: FormGroup;
    public creditoAprobadoForm: FormGroup;

    constructor(
        private _formBuilder: FormBuilder,
        private _router: Router,
    ) {
    }

    ngOnInit(): void {
        this.datosClienteForm = this._formBuilder.group({
            identificacion: ['', [Validators.required]], //
            codigo: ['', [Validators.required]], //
        });
        this.creditoAprobadoForm = this._formBuilder.group({
            nombre: ['', [Validators.required]], //
            apellido: ['', [Validators.required]], //
            identificacion: ['', [Validators.required]], //
            celular: ['', [Validators.required]], //
            correo: ['', [Validators.required]], //
            monto: ['', [Validators.required]], //
            cooperativa: ['', [Validators.required]], //
        });
    }


    get controlsForm() {
        return this.datosClienteForm.controls;
    }

    get creditoAprobadoControlsForm() {
        return this.creditoAprobadoForm.controls;
    }

    continuar() {
        this.submitted = true;
        if (this.datosClienteForm.invalid) {
            return;
        }
        this.pantalla = 2;
    }

    facturar() {
        this.submittedCA = true;
        if (this.creditoAprobadoForm.invalid) {
            return;
        }
        this._router.navigate(['/comercial/facturacion']);

    }
}
