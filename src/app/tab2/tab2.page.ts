import { Component } from '@angular/core';
import { evaluate } from 'mathjs';
import { IMemoria } from '../models/IMemoria.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'example.component.html',
})
export class appTab2Page {
  constructor(private alertController: AlertController) {}

  async presentAlert(titulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Opção Inválida',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page{
  operacao = '';
  resultado = '';
  numero = false;
  caracter = true;
  caracteres = ['.', '/', '*', '+', '-'];
  ponto = ['.'];

  memoria:IMemoria[] = [];

  constructor() {}

  ngOnInit() {}

  adicionarMemoria(){
    if (this.operacao != '' && this.resultado != ''){
      const memoria: IMemoria = {
        operacao: this.operacao,
        resultado: Number(this.resultado),
      };
      this.memoria.push(memoria);
      this.presentAlert('Aviso!', 'Nada para salvar!');
      
    }else if(this.operacao != '' && this.resultado == ''){
      this.calcularOperacao();
            const memoria: IMemoria = {
        operacao: this.operacao,
        resultado: Number(this.resultado),
      };
    }else{
      
    console.log(this.memoria);
  }
}

  calcularOperacao(){
    this.resultado = evaluate(this.operacao);
  }

  adicionarValor(valor: string) {
    this.caracter = this.caracteres.includes(valor);

    if (!this.caracter) {
      this.operacao += valor;
      this.numero = true;
    } else if (this.caracter && this.numero) {
      this.operacao += valor;
      this.numero = false;
    }

    if (!this.operacao) {
    }
  }
  limparOperacao(){
    this.operacao = '';
    this.resultado = '';
    this.numero = false;
  }

  limparMemoria(){
    this.operacao = '';
    this.resultado = '';
    this.numero = false;
  }

  apagarCaracter(){
    if(this.operacao.length > 0) {
      this.operacao =this.operacao.substring(0, this.operacao.length - 1);
    }

    const ultimo = this.operacao.substring(this.operacao.length, 1);
    this.caracter = this.caracteres.includes(ultimo);

    console.log(ultimo);
  }
  
}
