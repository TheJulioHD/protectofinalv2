import { PagoService } from 'src/Services/pago/pago.service';
import { Controller, Get } from '@nestjs/common';

@Controller('pago')
export class PagoController {
    constructor(private PagoService:PagoService){}

    @Get('/pago')
    Getpago(){
        try {
            
            this.PagoService.getPago().then((res)=> console.log(res))
        } catch (error) {
            console.log(error)
        }
    }
    @Get('/nopago')
    Getnopago(){
        try {
            
            this.PagoService.getNopagados().then((res)=> console.log(res))
        } catch (error) {
            console.log(error)
        }
    }
    @Get('/sipago')
    Getsipago(){
        try {
            
            this.PagoService.getpagados().then((res)=> console.log(res))
        } catch (error) {
            console.log(error)
        }
    }
}
