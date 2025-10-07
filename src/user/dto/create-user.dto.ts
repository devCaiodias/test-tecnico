import { IsEmail, IsNotEmpty } from "class-validator"

export class CreateUserDto {
  @IsNotEmpty()
  nome: string

  @IsNotEmpty()
  @IsEmail()
  email: string
  name: any
  createdAt: any
}
