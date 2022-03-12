import { TestBed } from "@angular/core/testing";
import { HeroService } from "./hero.service";
import { MessageService } from "./message.service";
import {HttpClientTestingModule, HttpTestingController}from "@angular/common/http/testing";

describe('hero services spect', () => {
    let mockMessageService; // se crea un mock del servicio de mensajes de
    let httpTestingController: HttpTestingController;
    let service: HeroService;
    beforeEach(() => {
        mockMessageService = jasmine.createSpyObj([
            'add'
        ])
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                HeroService,
                {provide: MessageService, useValue: mockMessageService}
            ]
        });

        httpTestingController = TestBed.inject(HttpTestingController); // manejamos el mock  httmport
        service = TestBed.inject(HeroService); // para utilizar el servicio original
    })

    describe('getHero', () => {
        it('should call get with correct URL', () => {

            // call getHero
            service.getHero(4).subscribe((heroe) => {
                expect(heroe.id).toBe(4);
            });

            // test that the URl was correct
            const req = httpTestingController.expectOne('api/heroes/4');
            // el metodo flush nos dice que data enviaremos en el req, hace la funcion de definir nuestro payload
            req.flush({id: 4, name: 'bymax', strengh: 100})
            expect(req.request.method).toBe('GET'); // verifica el verbo del api que se esta ejecutando.
            httpTestingController.verify();

        });
    })
})