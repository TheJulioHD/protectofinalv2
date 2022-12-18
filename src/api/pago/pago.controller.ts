import { PagoService } from 'src/Services/pago/pago.service';
import { Controller, Get } from '@nestjs/common';

@Controller('pago')
export class PagoController {
    constructor(private PagoService:PagoService){}

    @Get('/pago')
    async Getpago(){
        try {
            
            return await this.PagoService.getPago()

        } catch (error) {
            console.log({error})
        }
    }
    @Get('/nopago')
    async Getnopago(){
        try {
            
           return await this.PagoService.getNopagados()
        } catch (error) {
            console.log(error)
        }
    }
    @Get('/sipago')
    async Getsipago(){
        try {
            
          return await  this.PagoService.getpagados()
        } catch (error) {
            console.log(error)
        }
    }
}
