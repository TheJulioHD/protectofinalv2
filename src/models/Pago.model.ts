import { IsBoolean, IsDate, IsNumber } from 'class-validator';
import { ConsumoModel } from './Consumo.model';
export class PagoModel{
    @IsDate()
    fecha: Date;
    @IsNumber()
    total:number;
    @IsBoolean()
    pagado: boolean;
}