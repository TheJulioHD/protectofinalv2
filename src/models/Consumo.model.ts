import { IsBoolean, IsDate, IsNumber } from "class-validator";

export class ConsumoModel{
    @IsDate()
    fecha: Date;
    @IsNumber()
    consumo: number;
    @IsNumber()
    idCliente: number;
    @IsBoolean()
    pagadoc:boolean;
}