import { PagoService } from 'src/Services/pago/pago.service';
import { Controller, Get } from '@nestjs/common';

@Controller('pago')
export class PagoController {
    constructor(private PagoService:PagoService){}

    @Get('/pago')
    Getpago(){
        try {
            
            this.PagoService.getPago()
        } catch (error) {
            console.log(error)
        }
    }
    @Get('/nopago')
    Getnopago(){
        try {
            
            this.PagoService.getNopagados()
        } catch (error) {
            console.log(error)
        }
    }
    @Get('/sipago')
    Getsipago(){
        try {
            
            this.PagoService.getpagados()
        } catch (error) {
            console.log(error)
        }
    }
}
