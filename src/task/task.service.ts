import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) { }

  async create(data: CreateTaskDto) {
    const userExists = await this.prisma.user.findUnique({
      where: { id: data.userId },
    });

    if (!userExists) {
      throw new NotFoundException(`Usuário com ID ${data.userId} não encontrado`);
    }

    // ✅ Cria a tarefa
    const task = await this.prisma.task.create({
      data: {
        title: data.title,
        description: data.description,
        status: data.status ?? 'pending', // valor padrão se não vier do DTO
        userId: data.userId,
      },
      select: {
        id: true,
        title: true,
        description: true,
        status: true,
        userId: true,
        createdAt: true,
      },
    });

    return task;
  }

   async findOne(id: number) {
    const task = await this.prisma.task.findUnique({
      where: { id },
      select: {
        id: true,
        title: true,
        description: true,
        status: true,
        userId: true,
        createdAt: true,
      },
    });

    if (!task) throw new NotFoundException(`Tarefa com ID ${id} não encontrada`);

    return task;
  }

  async findAll() {
    return this.prisma.task.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        title: true,
        description: true,
        status: true,
        user: { select: { id: true, name: true, email: true } },
        createdAt: true,
      },
    });
  }

  async update(id: number, data: UpdateTaskDto) {
    const existingTask = await this.prisma.task.findUnique({ where: { id } });
    if (!existingTask) {
      throw new NotFoundException(`Tarefa com ID ${id} não encontrada`);
    }

    try {
      const updatedTask = await this.prisma.task.update({
        where: { id },
        data,
        select: {
          id: true,
          title: true,
          description: true,
          status: true,
          userId: true,
        },
      });

      return updatedTask;
    } catch (error) {
      throw new BadRequestException('Erro ao atualizar a tarefa');
    }
  }

  async remove(id: number) {
    const existingTask = await this.prisma.task.findUnique({ where: { id } });
    if (!existingTask) {
      throw new NotFoundException(`Tarefa com ID ${id} não encontrada`);
    }

    await this.prisma.task.delete({ where: { id } });

    return { message: `Tarefa com ID ${id} foi removida com sucesso` };
  }
}
