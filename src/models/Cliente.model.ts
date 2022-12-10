import { IsDateString, IsEmail, IsNumberString, IsString } from "class-validator";

export class ClienteModel{
    @IsString()
    nombre:string;
    @IsString()
    apellido:string;
    @IsEmail()
    correo: string;
    @IsNumberString()
    telefono: string;
    @IsString()
    domicilio: string;
    @IsDateString()
    fechaNacimiento: string;
}