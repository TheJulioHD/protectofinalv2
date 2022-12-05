import { ClienteEntity } from './../../Entity/Cliente.Entity';
import { ClienteController } from './cliente.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteServiceService } from 'src/Services/cliente/cliente.service';

@Module({
    imports: [TypeOrmModule.forFeature([ClienteEntity])],
    controllers: [ClienteController],
    providers: [ ClienteServiceService],
    exports:[TypeOrmModule]
})
export class ClienteModule {}