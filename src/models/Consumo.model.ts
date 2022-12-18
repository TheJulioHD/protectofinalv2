import { IsBoolean, IsDate, IsNumber } from "class-validator";

export class ConsumoModel{
    
    fecha: Date;
    @IsNumber()
    consumo: number;
    @IsNumber()
    idCliente: number;
    @IsBoolean()
    pagadoc:boolean;
}