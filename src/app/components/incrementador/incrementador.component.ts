import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: ``,
})
export class IncrementadorComponent implements OnInit {
  //
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input('valor')
  progreso: number = 50;

  @Input()
  btnClass: string = 'btn-primary';

  @Output()
  valorEmitido: EventEmitter<number> = new EventEmitter();

  get getProcentaje() {
    return `${this.progreso}%`;
  }

  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor >= 0) {
      this.valorEmitido.emit(100);
      return (this.progreso = 100);
    }
    if (this.progreso <= 0 && valor < 0) {
      this.valorEmitido.emit(0);
      return (this.progreso = 0);
    }
    this.progreso = this.progreso + valor;
    this.valorEmitido.emit(this.progreso);
    return this.progreso;
  }

  onChange(nuevoValor: number) {
    // if (nuevoValor >= 100) {
    //   this.progreso = 100;
    // } else if (nuevoValor <= 0) {
    //   this.progreso = 0;
    // } else {
    this.progreso = nuevoValor;
    // }
    this.valorEmitido.emit(this.progreso);
  }
}
