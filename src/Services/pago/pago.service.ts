import { ClienteService } from 'src/Services/cliente/cliente.service';
import { PagoModel } from './../../models/Pago.model';
import { PagoEntity } from './../../Entity/Pago.Entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class PagoService {
    constructor(@InjectRepository(PagoEntity)
                private pagoRepository: Repository<PagoEntity>,
                private cliente:ClienteService){}

    async create_pago(id_consumo: number, total: number, pagado:boolean){
        const date= new Date();
        return await this.pagoRepository.insert({
            fecha:date,
            idConsumo:id_consumo,
            total:total,
            pagado:pagado
        }).then((res)=>console.log(res)).catch((err)=> console.log(err))
    }


    getNopagados(){
        return this.cliente.getNopagado()
    }
    getpagados(){
        return this.cliente.getpagado()
    }
    getPago(){
        return this.cliente.getpago()
    }
}