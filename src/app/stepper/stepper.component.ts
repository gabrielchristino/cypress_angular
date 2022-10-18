import { Component, Input } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-stepper',
  template: `<div>
    <button aria-label="pokemon" (click)="callPokemon()">Call Pokemon</button>
    <br>
    {{ resposta | json }}
  </div>`,
})
export class StepperComponent {
  public resposta: any
  constructor(private http: HttpClient) {}

  callPokemon(): void {
    this.http.get('https://pokeapi.co/api/v2/pokemon/ditto')
    .subscribe({
      next: (res: any) => {
        this.resposta = res;
        console.log(res);
      }
    });
  }
}
