import { StrengthPipe } from "./strength.pipe";

describe('streght pipe', () => {
    it('should display weak if stregth is 5', () => {
        let pipe = new StrengthPipe();
        let value = pipe.transform(5);
        expect(value).toEqual('5 (weak)')
    })
    it('should display strong if stregh is 10' , () => {
        let pipe = new StrengthPipe();
        let value = pipe.transform(10);
        expect(value).toEqual('10 (strong)')
    })
})