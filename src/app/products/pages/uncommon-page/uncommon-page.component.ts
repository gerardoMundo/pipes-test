import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: [],
})
export class UncommonPageComponent {
  public name = 'Gerardo';
  public genre: 'male' | 'female' = 'male';

  public clients: string[] = ['Maxi', 'Xavi', 'Chabelo', 'Hornz', 'Zlatahn'];
  public clientsMap = {
    '=0': 'no tenemos clientes.',
    '=1': 'tenemos un clinte a la espera',
    other: 'tenemos # clientes esperando',
  };

  public mapGenre = {
    male: 'invitado',
    female: 'invitada',
  };

  sendInvitation() {
    this.name = 'Malis';
    this.genre = 'female';
  }

  deleteClient() {
    this.clients.shift();
  }
}
