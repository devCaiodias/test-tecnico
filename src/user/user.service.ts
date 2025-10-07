import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async create(data: CreateUserDto) {
    return await this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        createdAt: data.createdAt,
      }
    });
  }

  async findAll() {
    return await this.prisma.user.findMany()
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    return user;
  }

async update(id: number, data: UpdateUserDto) {
  console.log('Atualizando usuário:', id, data);

  const user = await this.prisma.user.update({
    where: { id },
    data,
  });

  return user;
}

  async remove(id: number) {
    return await this.prisma.user.delete({where: {id}})
  }
}
