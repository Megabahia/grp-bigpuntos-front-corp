import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-saldo-contable',
    templateUrl: './saldo-contable.component.html',
    styleUrls: ['./saldo-contable.component.scss']
})
export class SaldoContableComponent implements OnInit {
    public page_size: any = 10;
    public collectionSize;
    public page = 1;


    constructor() {
    }

    ngOnInit(): void {
    }

}
