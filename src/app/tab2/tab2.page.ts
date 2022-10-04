import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page{
  operacao = '';
  resultado = '';

  constructor() {}

  adicionarValor(valor: string) {
    this.operacao += valor;
  }
  limparOperacao(){
    this.operacao = '';
  }

  limparMemoria(){
    this.operacao = '';
    this.resultado = '';
  }

  apagarCaracter(){
    if(this.operacao.length > 0) {
      this.operacao =this.operacao.substring(0, this.operacao.length - 1);
    }
  }

}
