import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {FacturacionService} from '../facturacion/facturacion.service';
import {EnvioDocumentosService} from './envio-documentos.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-envio-documentos',
    templateUrl: './envio-documentos.component.html',
    styleUrls: ['./envio-documentos.component.scss']
})
export class EnvioDocumentosComponent implements OnInit {
    public submitted = false;
    public envioForm: FormGroup;
    public actualizarCreditoFormData;
    private mensaje: string;


    constructor(
        private _formBuilder: FormBuilder,
        private _router: Router,
        private _consultaCreditosService: EnvioDocumentosService,
        private modalService: NgbModal,
    ) {
    }

    ngOnInit(): void {
        this.actualizarCreditoFormData = new FormData();

        this.envioForm = this._formBuilder.group({
            solicitudCredito: ['', [Validators.required]], //
            evaluacionCrediticia: ['', [Validators.required]], //
            buro: ['', [Validators.required]], //
            identificacion: ['', [Validators.required]], //
            papeletaVotacion: ['', [Validators.required]], //
            identificacionConyuge: ['', [Validators.required]], //
            papeletaVotacionConyuge: ['', [Validators.required]], //
            planillaLuzDomicilio: ['', [Validators.required]], //
            mecanizadoIees: ['', [Validators.required]], //
            matriculaVehiculo: ['', [Validators.required]], //
            impuestoPredial: ['', [Validators.required]], //
            autorizacionInformacion: ['', [Validators.required]], //
            fichaCliente: ['', [Validators.required]], //
            conveniosCuenta: ['', [Validators.required]], //
            pagare: ['', [Validators.required]], //
            tablaAmortizacion: ['', [Validators.required]], //
            seguroDesgravamen: ['', [Validators.required]], //
            gastosAdministracion: ['', [Validators.required]], //
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

    enviar(modal) {
        this.submitted = true;
        if (this.envioForm.invalid) {
            return;
        }
        this.actualizarCreditoFormData.set('numeroIdentificacion', '"11321"');
        this._consultaCreditosService.guardarDatos(this.actualizarCreditoFormData).subscribe((info) => {
            console.log('guardo-----', info);
        }, (error) => {
            this.mensaje = 'Error al guardar los datos' + error;
            this.modalOpenSLC(modal);
            return;
        });
        // this._router.navigate(['/comercial/guia-remision']);
    }

    modalOpenSLC(modalSLC) {
        this.modalService.open(modalSLC, {
                centered: true,
                size: 'lg' // size: 'xs' | 'sm' | 'lg' | 'xl'
            }
        );
    }

}
