import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: [],
})
export class UncommonPageComponent {
  public name = 'Gerardo';
  public genre: 'male' | 'female' = 'male';
  public mapGenre = {
    male: 'invitado',
    female: 'invitada',
  };

  public clients: string[] = ['Maxi', 'Xavi', 'Chabelo', 'Hornz', 'Zlatahn'];
  public clientsMap = {
    '=0': 'no tenemos clientes.',
    '=1': 'tenemos un clinte a la espera',
    other: 'tenemos # clientes esperando',
  };
  public person = {
    name: 'Gener',
    age: 45,
    adress: 'Ottawa, Canada',
  };

  public myObservable: Observable<number> = interval(2000).pipe(
    tap(resp => console.log('tap:', resp))
  );

  sendInvitation() {
    this.name = 'Malis';
    this.genre = 'female';
  }

  deleteClient() {
    this.clients.shift();
  }
}
