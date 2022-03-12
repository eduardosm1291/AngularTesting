import { HeroComponent } from './../hero/hero.component';
import { Component, Input, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { HeroesComponent } from "./heroes.component";
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('Heroes component deep test', () => {
    let component: HeroesComponent;
    let heroes;
    let mockHeroService;
    let fixture: ComponentFixture<HeroesComponent>;

    

    beforeEach(() => {
        heroes = [
            {id: 1, name: 'spider', strength: 8},
            {id: 2, name: 'hulk', strength: 20},
            {id: 3, name: 'batman', strength: 30}
        ]
        // al crear el mock del servicio definimos los metodos que usa el componente
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        TestBed.configureTestingModule({
            declarations: [HeroComponent, HeroesComponent],
            providers: [ 
                {provide: HeroService, useValue: mockHeroService}
            ],
            schemas: [NO_ERRORS_SCHEMA]
        })

        fixture = TestBed.createComponent(HeroesComponent);

    })

    it('should create component', () => {
        expect(true).toBe(true);
    });

    it('should render each hero as a Herocomment', () => {
        
        mockHeroService.getHeroes.and.returnValue(of(heroes));
        //run ngOnInit
        fixture.detectChanges();
        const heroComponentDe = fixture.debugElement.queryAll(By.directive(HeroComponent));
        expect(heroComponentDe.length).toEqual(3);

        for(let i = 0; i <heroComponentDe.length; i++) {
            expect(heroComponentDe[i].componentInstance.hero.name).toEqual(heroes[i].name);
        }
        
    });



})