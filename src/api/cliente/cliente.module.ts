import { PagoService } from './../../Services/pago/pago.service';
import { ConsumoService } from 'src/Services/consumo/consumo.service';
import { PagoEntity } from './../../Entity/Pago.Entity';
import { ConsumoEntity } from './../../Entity/Consumo.Entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteEntity } from 'src/Entity/Cliente.Entity';
import { ClienteService } from 'src/Services/cliente/cliente.service';
import { ClienteController } from './cliente.controller';

@Module({
    imports: [TypeOrmModule.forFeature([ClienteEntity, ConsumoEntity, PagoEntity])],
    controllers: [ClienteController],
    providers: [ ClienteService, ConsumoService, PagoService],
    exports:[TypeOrmModule]
})
export class ClienteModule {}
