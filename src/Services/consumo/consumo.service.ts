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
    age: any

   async create(consumo: ConsumoModel){
        const date= new Date();
        let total=0;
        
        if(consumo.consumo>1 && consumo.consumo<101){
            total= consumo.consumo*150;
        }else if(consumo.consumo>101 && consumo.consumo<301){
            total= consumo.consumo*190;
        }

        
        this.cliente.getony(consumo.idCliente).then((res)=> {
            console.log(res.fechaNcimiento)
            this.calcularedad(res.fechaNcimiento)
        
        });
        if(this.age>=50){
            total=total*.10
        }
        const newconsumo = await this.consumoRepository.save({
            fecha: date,
            consumo:consumo.consumo,
            idCliente:consumo.idCliente
            
        }).then(
            (res) => this.pagoservice.create_pago(res.id ,total).then((res)=> console.log(res)).catch((error) => console.log(error))
        )
        .catch((error) => console.log(error))
    }
    getall(){
        return this.consumoRepository.find({
            relations:['idCliente','pago.idConsumo']
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
        const date2 = new Date();
        const anoactual:number = date2.getFullYear();
        const mesactual:number = date2.getMonth();
        const diaactual:number = date2.getDate();

        const anoNacimiento = parseInt(String(datenacimiento).substring(0,4))
        const mesNacimiento = parseInt(String(datenacimiento).substring(5,7))
        const diaNacimiento = parseInt(String(datenacimiento).substring(8,10))
        let edad = anoactual - anoNacimiento;
        if(mesactual < mesNacimiento){
            edad--
        }else if(mesactual === mesNacimiento){
            if(diaactual < diaNacimiento){
                edad--
            }
        }
        this.age=edad

    }
}
