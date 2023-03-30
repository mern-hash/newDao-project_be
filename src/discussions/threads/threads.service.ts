import { Injectable } from '@nestjs/common';
import { CreateThreadDto } from './dto/create-thread.dto';
import { UpdateThreadDto } from './dto/update-thread.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

@Injectable()
export class ThreadsService {
  constructor(private prisma: PrismaService) {}
  create(createThreadDto: CreateThreadDto) {
    const thread: any = {
      id: createThreadDto.id,
      title: createThreadDto.title,
      content: createThreadDto.content,
      viewCount: createThreadDto.viewCount,
      createdAt: createThreadDto.createdAt,
      authorId: createThreadDto.authorId,
      canvasAction: createThreadDto.canvasAction,
      canvasSession: createThreadDto.canvasSession,
      canvasHash: createThreadDto.canvasHash,
    };
    // console.log("thread",thread)
    return this.prisma.thread.create({ data: thread });
  }
  // return 'This action adds a new thread';
  // },

  findDaoInformation(spaceId: string) {
    return `This action returns the about section for a given ${spaceId}`;
  }
  findAllCatagories(spaceId: string) {
    return `This action returns all catagories for a ${spaceId}`;
  }
  findAllTags(spaceId: string) {
    return `This action returns all tags for a ${spaceId}`;
  }
  findTrending(spaceId: string) {
    return `This action returns all trending thread for ${spaceId}based on the amount of comments`;
  }

  findAllApproved(spaceId: string) {
    return `This action returns all threads that have been admin approved in ${spaceId}`;
  }
  findAllNotApproved(spaceId: string) {
    return `This action returns all threads that are awaiting admin approval in ${spaceId}`;
  }

  async findOne(id: number, spaceId: string) {
    return await prisma.thread.findUnique({ where: { id: id } });
    return `This action returns a #${id} thread in ${spaceId}`;
  }

  update(id: number, updateThreadDto: UpdateThreadDto) {
    //thread can only be updated by a moderator this actor will approve the thread for post
    return `This action updates a #${id} thread`;
  }

  async remove(id: any, spaceId: string) {
    //threads can only be removed by an admin
    return await prisma.thread.delete({ where: { id } });
    // return `This action removes a #${id} thread in ${spaceId}`;
  }

  async findAll() {
    return await prisma.thread.findMany();
    //threads can only be removed by an admin
    // return `This action removes a thread in `;
  }
}
