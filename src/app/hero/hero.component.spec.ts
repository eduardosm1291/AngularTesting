import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { HeroComponent } from "./hero.component";

describe('Hero Component', () => {
    let fixture: ComponentFixture<HeroComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroComponent);
    });

    it('should have the correct hero', () => {
        fixture.componentInstance.hero = {
            id:1,
            name:'lalo',
            strength:1
        };
        //fixture.detectChanges(); no necesitamos detectar cambios para esta prueba
        expect(fixture.componentInstance.hero.name).toEqual('lalo');
    }); 
    it('should render the hero name in an anchor tag', () => {
        fixture.componentInstance.hero = {
            id:1,
            name:'lalo',
            strength:1
        };
        fixture.detectChanges();
        let ahtml = fixture.debugElement.query(By.css('a')); // con debug element podemos acceder desde el nodo raiz del dom

        expect(ahtml.nativeElement.textContent).toContain('lalo');
        // fixture.naviteelement nos permite entrar al dom de la plantilla del componente
        expect(fixture.nativeElement.querySelector('a').textContent).toContain('lalo');
    });
    
});