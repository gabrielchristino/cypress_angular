import { HttpClientModule } from '@angular/common/http'
import { TestBed } from '@angular/core/testing'
import { StepperComponent } from './stepper.component'


describe('StepperComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientModule],
        });
    });

    const pokemonSelector = '[aria-label=pokemon]'

    it('quando clicar em pokemon chamar a api', () => {
        cy.mount('<app-stepper></app-stepper>', {
            declarations: [StepperComponent],
        })
        cy.get(pokemonSelector).click()
    })

    it('quando clicar em pokemon chamar a api e realizar mock', () => {
        cy.intercept(
            {
                method: 'GET',
                url: '*ditto*',
            },
            [{ batata: 10 }]
        ).as('getPokemon')
        cy.mount('<app-stepper></app-stepper>', {
            declarations: [StepperComponent],
        })

        cy.get(pokemonSelector).click()

        cy.wait('@getPokemon').then((interception) => {
            console.log(interception);
            
        })
    })
})