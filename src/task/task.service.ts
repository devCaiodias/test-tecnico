import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateTaskDto) {
    return await this.prisma.task.create({data: {
      title: data.title,
      description: data.description,
      status: data.status,
      userId: data.userId
    }})
  }

  async findAll() {
    return await this.prisma.task.findMany()
  }

  async findOne(id: number) {
    const task = await this.prisma.task.findUnique({
      where: {id}
    })

    return task
  }

  async update(id: number, data: UpdateTaskDto) {
    console.log('Atualizando usuário:', id, data);

  const task = await this.prisma.task.update({
    where: { id },
    data,
  });

  return task;
  }

  async remove(id: number) {
    return await this.prisma.task.delete({where: {id}})
  }
}
