import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public valorUm: number;
  public valorDois: number;

  public resultado: number;

  constructor() {}

  public somar() {
    this.resultado = this.valorUm + this.valorDois;
  }

  public subtrair() {
    this.resultado = this.valorUm - this.valorDois;
  }

  public multiplicar() {
    this.resultado = this.valorUm * this.valorDois;
  }

  public dividir() {
    this.resultado = this.valorUm / this.valorDois;
  }

  public maior() {
    this.resultado = 
  }

  public limpar() {
    this.valorUm = null;
    this.valorDois = null;
    this.resultado = null;
  }
}
