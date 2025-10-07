import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async create(data: CreateUserDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: {email: data.email}
    })

    if (existingUser) {
      throw new BadRequestException('E-mail ja esta em uso')
    }

    return await this.prisma.user.create({
      data: {
        name: data.nome,
        email: data.email,
        createdAt: data.createdAt ?? new Date(),
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true
      }
    });
  }

  async findAll() {
    return await this.prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
      select: { id: true, name: true, email: true, createdAt: true }
    })
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: { id: true, name: true, email: true, createdAt: true },
    });

    if (!user) throw new NotFoundException(`Usuário com ID ${id} não encontrado`);

    return user;
  }

async update(id: number, data: UpdateUserDto) {
  const existingUser = await this.prisma.user.findUnique({ where: { id } });
    if (!existingUser) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }

    try {
      const updatedUser = await this.prisma.user.update({
        where: { id },
        data,
        select: { id: true, name: true, email: true, createdAt: true },
      });

      return updatedUser;
    } catch (error) {
      throw new BadRequestException('Erro ao atualizar o usuário');
    }
}

  async remove(id: number) {
    const existingUser = await this.prisma.user.findUnique({ where: { id } });
    if (!existingUser) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }

    await this.prisma.user.delete({ where: { id } });

    return { message: `Usuário com ID ${id} foi removido com sucesso` };
  }
}
