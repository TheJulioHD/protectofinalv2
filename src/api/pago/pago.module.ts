import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteEntity } from 'src/Entity/Cliente.Entity';
import { ConsumoEntity } from 'src/Entity/Consumo.Entity';
import { PagoEntity } from 'src/Entity/Pago.Entity';
import { ClienteService } from 'src/Services/cliente/cliente.service';
import { ConsumoService } from 'src/Services/consumo/consumo.service';
import { PagoService } from 'src/Services/pago/pago.service';
import { ConsumoController } from '../consumo/consumo.controller';

@Module({
    imports: [TypeOrmModule.forFeature([ConsumoEntity, PagoEntity, ClienteEntity])],
    controllers: [ConsumoController],
    providers: [ ConsumoService, PagoService, ClienteService],
    exports:[TypeOrmModule]
})
export class PagoModule {}
