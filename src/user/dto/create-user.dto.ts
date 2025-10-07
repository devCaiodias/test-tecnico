import { IsDate, IsEmail, IsNotEmpty } from "class-validator"

export class CreateUserDto {
  @IsNotEmpty()
  nome: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsDate()
  createdAt: Date
}
