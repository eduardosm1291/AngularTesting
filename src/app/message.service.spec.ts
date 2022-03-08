import { MessageService } from "./message.service";

describe('Message Service', () => {
    let service: MessageService;

    beforeEach(() => {
        service = new MessageService();
    })

    it('should have no message to start' , () => {
        expect(service.messages.length).toBe(0);
    })
    it('should add a message when add is called', () => {
        service.add('menssage 1');
        expect(service.messages.length).toBe(1);
    })
    it('should remove all message when clear is called', () => {
        service.clear();
        expect(service.messages.length).toBe(0 );
    })
})