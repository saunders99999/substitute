import { Component } from '@angular/core';

@Component({
  selector: 'subs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'subs';
  players = [
    { id: 1, name: 'Alvin', subCount: 0, onField: 1 },
    { id: 2, name: 'Brady', subCount: 0, onField: 1},
    { id: 3, name: 'Jack W', subCount: 0, onField: 1},
    { id: 4, name: 'Jackson', subCount: 0, onField: 1 },
    { id: 5, name: 'Jahari', subCount: 0, onField: 1 },
    { id: 6, name: 'Kaelan', subCount: 0, onField: 1 },
    { id: 7, name: 'Nate', subCount: 0, onField: 1 },
    { id: 8, name: 'Ruby', subCount: 0, onField: 1 },
    { id: 9, name: 'Tyson', subCount: 0, onField: 1 },
    { id: 10, name: 'Zack', subCount: 0, onField: 1 }
  ];

  updateProperty(id: number, prop: string, inc: boolean) : void {
    this.players.forEach(player => {
      if (player.id == id) {
        (inc) ? player[prop]++ : player[prop]--;
      }
    });
  }

  addSub(event: any) : void {
    this.updateProperty( event.target.name, 'subCount', true);
  }

  removeSub(event: any) : void {
    this.updateProperty( event.target.name, 'subCount', false);
  }

  addField(event: any) : void {
    this.updateProperty( event.target.name, 'onField', true);
  }

  removeField(event: any) : void {
    this.updateProperty( event.target.name, 'onField', false);
  }

  increaseOnField() : void {
    this.players.forEach( player => {
      player.onField++
    })
  }

  resetField() : void {
    this.players.forEach( player => {
      player.onField = 0;
    })
  }
}
