import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsString()
  status?: 'pending' | 'done';

  @IsNotEmpty()
  userId: number;
}
