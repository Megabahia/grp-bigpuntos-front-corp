import {Component, OnInit} from '@angular/core';
import {EnviosRealizadosService} from './envios-realizados.service';

@Component({
    selector: 'app-envios-realizados',
    templateUrl: './envios-realizados.component.html',
    styleUrls: ['./envios-realizados.component.scss']
})
export class EnviosRealizadosComponent implements OnInit {
    public page_size: any = 10;
    public collectionSize;
    public page = 0;
    public envios = [];

    constructor(
        private _consultaCreditosService: EnviosRealizadosService,
    ) {
    }

    ngOnInit(): void {
        this._consultaCreditosService.listarEnvios({page_size: this.page_size, page: this.page})
            .subscribe((data) => {
                console.log('info', data);
                this.envios = data.info;
            });
    }

}
