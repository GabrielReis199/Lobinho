import * as signalR from '@microsoft/signalr';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  private hubConnection!: signalR.HubConnection;

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7171/gameHub')
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Conexão iniciada!'))
      .catch(err => console.error('Erro ao conectar: ' + err));
  };
}
