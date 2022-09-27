import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  public valorUm: number;
  public valorDois: number;

  public resultado: number;
  public conta: string;

  constructor(private alertController: AlertController) {}

  async somar() {
    this.resultado = this.valorUm + this.valorDois;
    this.conta = 'Soma';

    const alert = await this.alertController.create({
      header: 'Resultado',
      subHeader: `${this.valorUm} + ${this.valorDois} = ${this.resultado}`,
      buttons: ['OK'],
    });

    await alert.present();
  }


  async subtrair() {
    this.resultado = this.valorUm - this.valorDois;
    this.conta = 'Subtração';
    const alert = await this.alertController.create({
      header: 'Resultado',
      subHeader: `${this.valorUm} - ${this.valorDois} = ${this.resultado}`,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async multiplicar() {
    this.resultado = this.valorUm * this.valorDois;
    this.conta = 'Multiplicação';
    const alert = await this.alertController.create({
      header: 'Resultado',
      subHeader: `${this.valorUm} * ${this.valorDois} = ${this.resultado}`,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async dividir() {
    this.resultado = this.valorUm / this.valorDois;
    this.conta = 'Divisão';
    const alert = await this.alertController.create({
      header: 'Resultado',
      subHeader: `${this.valorUm} / ${this.valorDois} = ${this.resultado}`,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async maior() {
    if (this.valorUm < this.valorDois){
      const alert = await this.alertController.create({
        header: 'Valores',
        subHeader: 'O maior valor é:',
        message: `${this.valorDois}`,
        buttons: ['OK'],
      });

      await alert.present();
    }else {

  const alert = await this.alertController.create({
    header: 'Valores',
    subHeader: 'O maior valor é:',
    message: `${this.valorUm}`,
    buttons: ['OK'],
  });

    await alert.present();
}
}
async menor() {
  if (this.valorUm < this.valorDois){
    const alert = await this.alertController.create({
      header: 'Valores',
      subHeader: 'Maior valor:',
      message: `${this.valorUm}`,
      buttons: ['OK'],
    });

    await alert.present();
  }else {

const alert = await this.alertController.create({
  header: 'Valores',
  subHeader: 'Menor valor:',
  message: `${this.valorDois}`,
  buttons: ['OK'],
});
  await alert.present();
}
}

  public limpar() {
    this.valorUm = null;
    this.valorDois = null;
    this.resultado = null;
  }
}
