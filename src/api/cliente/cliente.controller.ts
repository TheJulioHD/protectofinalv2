import { ClienteModel } from './../../models/Cliente.model';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ClienteService } from 'src/Services/cliente/cliente.service';


@Controller('cliente')
export class ClienteController {
    constructor(private clienteService: ClienteService){}
    @Post()
    Create(@Body()params:ClienteModel): boolean{
        try {
            this.clienteService.create(params)
            return true
        } catch (error) {
            console.log("error =>"+error)
        }
    }
    @Post("/create")
    Create2(@Body()params:ClienteModel){
        try {
            this.clienteService.create(params)
        } catch (error) {
            console.log("error =>"+error)
        }
    }
    @Get()
    Getall(){
        try {
            return this.clienteService.getall()
        } catch (error) {
            console.log(error)
        }
    }
    @Get('/reporte')
    Getreorte(){
        try {
            return this.clienteService.getreporte()
        } catch (error) {
            console.log(error)
        }
    }
    @Get('/:id')
    getclienteById(@Param('id') param){
        try {
            const cliente= this.clienteService.getbyid(param)
            return cliente ?? "El cliente no existe"
        } catch (error) {
            console.log(error)
        }
    }
}
