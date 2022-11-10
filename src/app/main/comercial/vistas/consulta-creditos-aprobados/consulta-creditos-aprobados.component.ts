import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ConsultaCreditosAprobadosService} from './consulta-creditos-aprobados.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

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
    public codigo;
    public credito;

    private mensaje: string;

    constructor(
        private modalService: NgbModal,
        private _formBuilder: FormBuilder,
        private _router: Router,
        private _consultaCreditosService: ConsultaCreditosAprobadosService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.datosClienteForm = this._formBuilder.group({
            identificacion: ['', [Validators.required]], //
            // codigo: ['', [Validators.required]], //
            codigo: [''], //
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

    continuar(modal) {
        this.submitted = true;
        if (this.datosClienteForm.invalid) {
            return;
        }
        // this.datosClienteForm.getRawValue().codigo
        const data = {
            numeroIdentificacion: this.datosClienteForm.getRawValue().identificacion,
            codigo: this.datosClienteForm.getRawValue().codigo
        };
        this._consultaCreditosService.valdiar(data).subscribe(info => {
            this.credito = info;
            this.creditoAprobadoForm.patchValue({
                nombre: info?.nombresCompleto,
                apellido: info?.apellidos,
                identificacion: info?.numeroIdentificacion,
                celular: info?.celular,
                correo: info?.email,
                monto: info?.monto,
                cooperativa: info?.cooperativa
            });
            this.pantalla = 2;
        }, (error) => {
            this.mensaje = 'Código invalido';
            this.modalOpenSLC(modal);
            return;
        });
    }

    generar(modal) {
        this.submitted = true;
        if (this.datosClienteForm.invalid) {
            return;
        }
        const data = {
            numeroIdentificacion: this.datosClienteForm.getRawValue().identificacion,
        };
        this._consultaCreditosService.generarCodigo(data).subscribe(info => {
            this.mensaje = 'Código enviado al correo';
            this.modalOpenSLC(modal);

        });
    }

    facturar() {
        this.submittedCA = true;
        if (this.creditoAprobadoForm.invalid) {
            return;
        }
        this._router.navigate(['/comercial/facturacion/', this.credito._id]);
        // this.route.navigate(['/comercial/facturacion', this.credito]);

    }

    modalOpenSLC(modalSLC = 'modalSLC') {
        this.modalService.open(modalSLC, {
                centered: true,
                size: 'lg' // size: 'xs' | 'sm' | 'lg' | 'xl'
            }
        );
    }
}
