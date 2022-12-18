import { ClienteModel } from './../../models/Cliente.model';
import { ClienteEntity } from './../../Entity/Cliente.Entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {

    constructor(@InjectRepository(ClienteEntity)
                private clienteRepository: Repository<ClienteEntity>){}

    async create(cliente:ClienteModel){
        console.log(cliente)
        return await this.clienteRepository.save(cliente).catch((error) => console.log("error =>"+ error))
    }

    getall():Promise<ClienteEntity[]>{
        return this.clienteRepository.find()
    }

    async getony(id:number):Promise<string>{
        return  (await this.clienteRepository.findOne({where:{id:id}})).fechaNacimiento
    }
    async getbyid(id:number){
        return   (await this.clienteRepository.findOne({
            relations:{consumo: {pago: true}},
            where:{id: id}
        }))
    }
    getreporte(){
        return this.clienteRepository.find({
            relations:{
                consumo:{pago: true}
            }
        })
    }
    getpago(){
        return this.clienteRepository.find({
            relations:{
                consumo:{pago: true}
            },
            select:{
                id:true,
                nombre:true,
                apellido:true,
                telefono:true,
                domicilio:true,
                fechaNacimiento:true,
                consumo:{
                    id:true,
                    pago:true
                }
            }
        })
    }
    getpagado(){
        return this.clienteRepository.find({
            relations:{
                consumo:{pago: true}
            },
            where:{consumo:{pago:{pagado:true}}},
            select:{
                id:true,
                nombre:true,
                apellido:true,
                telefono:true,
                domicilio:true,
                fechaNacimiento:true,
                consumo:{
                    id:true,
                    pago:true
                }
            }
        })
    }
    
    getNopagado(){
        return this.clienteRepository.find({
            relations:{
                consumo:{pago: true}
            },
            where:{consumo:{pago:{pagado:false}}},
            select:{
                id:true,
                nombre:true,
                apellido:true,
                telefono:true,
                domicilio:true,
                fechaNacimiento:true,
                consumo:{
                    id:true,
                    pago:true
                }
            }
        })
    }
    
}
