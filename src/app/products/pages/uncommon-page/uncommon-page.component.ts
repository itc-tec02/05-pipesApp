import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})

export class UncommonPageComponent {

  //i18nSelect
  public name: string = 'Edson';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void {
    this.name = 'Lizbeth'
    this.gender = 'female';
  }

  //i18nPlurar
  public clients: string[] = ['Edson', 'Lizbeth', 'Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo','Melissa','Natalia']
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  removeClient():void {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Edson',
    age: '34',
    address: 'Ottowa, Canada',
  }


  //Async Pipe

  public myObservable: Observable<number>  = interval(2000)
    .pipe(
      tap(value => console.log('tap:', value)
      )
    );


    public myPromise: Promise<string> = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve( 'Tenemos data en la promesa.' )
        console.log( 'Tenemos data en la promesa.' )
      }, 3500);
    })

}
