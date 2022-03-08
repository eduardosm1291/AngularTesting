import { By } from '@angular/platform-browser';
import { HeroService } from './../hero.service';
import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component"
import { Hero } from '../hero';

describe('Heroes Component', () => {
    let component: HeroesComponent;
    let heroes;
    let mockHeroService;
    let fixture: ComponentFixture<HeroesComponent>;

    @Component({
        selector: 'app-hero',
        template: '<div></div>',
      })
      class FackHeroComponent {
        @Input() hero: Hero;
        //@Output() delete = new EventEmitter();
      }


    beforeEach(() => {
        heroes = [
            {id: 1, name: 'spider', strength: 8},
            {id: 2, name: 'hulk', strength: 20},
            {id: 3, name: 'batman', strength: 30}
        ]
        // al crear el mock del servicio definimos los metodos que usa el componente
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        TestBed.configureTestingModule({
            declarations: [
                HeroesComponent,
                FackHeroComponent
            
            ],
            providers: [
                {provide:HeroService, useValue: mockHeroService}
            ],
            //schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroesComponent);
    });

    it('should set heroes correctly from the service', () => {
        mockHeroService.getHeroes.and.returnValue(of(heroes));
        fixture.detectChanges();
        expect(fixture.componentInstance.heroes.length).toBe(3);
    });

    //verificar los elementos del dom que se generan al recorrer heroesBefore
    it('should create one li for each hero', () => {
        mockHeroService.getHeroes.and.returnValue(of(heroes));
        fixture.detectChanges();
        expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3)
    });



})