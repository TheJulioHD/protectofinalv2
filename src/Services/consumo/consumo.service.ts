import { ConsumoModel } from './../../models/Consumo.model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConsumoEntity } from 'src/Entity/Consumo.Entity';
import { LessThan, MoreThan, Repository } from 'typeorm';
import { ClienteService } from '../cliente/cliente.service';
import { PagoService } from '../pago/pago.service';

@Injectable()
export class ConsumoService {
    constructor(@InjectRepository(ConsumoEntity)
    private consumoRepository: Repository<ConsumoEntity>,
    private pagoservice:PagoService,
    private cliente: ClienteService){}

   async create(consumo: ConsumoModel){
        const date= new Date();
        let total=0;
        let pagado= consumo.pagadoc
        let fecha = new Date((await this.cliente.getony(consumo.idCliente)))
        let age = this.calcularedad(fecha)
        if(consumo.consumo>=1 && consumo.consumo<=100){
            total= consumo.consumo*150;
        }else if(consumo.consumo>=101 && consumo.consumo<=300){
            total= consumo.consumo*170;
        }else{
            total= consumo.consumo*190;

        }
        if(age>=50){
            total=total - (total*.10)
        }
        const newconsumo = await this.consumoRepository.save({
            fecha: date,
            consumo:consumo.consumo,
            idCliente:consumo.idCliente
            
        }).then(
            (res) => this.pagoservice.create_pago(res.id ,total, pagado).then((res)=> console.log(res)).catch((error) => console.log(error))
        )
        .catch((error) => console.log(error))
    }
    getall(){
        return this.consumoRepository.find({
            relations:['idCliente','pago.idConsumo']
        })
    }
    getConsumoCliente(){
        return this.consumoRepository.find({
            relations:['idCliente']
        })
    }
    getmaximo(){
        return this.consumoRepository.find(
            {
            relations:['idCliente','pago.idConsumo'],
            where:{
                consumo:MoreThan(300),
            }
        })
    }
    
    getmin(){
        return this.consumoRepository.find(
            {
            relations:['idCliente','pago.idConsumo'],
            where:{
                consumo:LessThan(20),
            }
        })
    }
    calcularedad(datenacimiento:Date){
        let hoy = new Date()
        let fechaNacimiento = new Date(datenacimiento)
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
        let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
        if (
          diferenciaMeses < 0 ||
          (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
        ) {
          edad--
        }
        return edad

    }

    
}
