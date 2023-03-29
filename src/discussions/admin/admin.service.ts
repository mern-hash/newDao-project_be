import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

const prisma = new PrismaClient();

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}
 async create(createAdminDto: CreateAdminDto) {
    const thread: any = {
      id: createAdminDto.id,
      content: createAdminDto.content,
      createdAt: createAdminDto.createdAt,
      authorId: createAdminDto.authorId,
      threadId: createAdminDto.threadId,
      canvasAction: createAdminDto.canvasAction,
      canvasSession: createAdminDto.canvasSession,
      canvasHash: createAdminDto.canvasHash
    };
  console.log("thread",thread)
  return this.prisma.comment.create({ data: thread });
  }
 
  createTag(CreateTagDto: CreateTagDto){
    return 'This action creates a tag'
  }
  removeTag(UpdateTagDto: UpdateTagDto){
    return `This action removes a tag`
  }
  createCategory(createCategory: any){
    return `This action creates a category`
  }
  removeCategory(removeCategory: any){
    return `This action removed a category`
  }
  moveThread(threadId: string){
    return `This action updated the tag, category or both of a thread`
  }
  removeComment(id:string){
    //this rout will remove any  comment from any post in the space id 
    return `This action removes a comment from a post`
  }
  suspendUser(id: string){
    return `This action removes a user from the space`
  }

 async findAll() {
    return await prisma.comment.findMany();
    return `This action returns all moderators of a space`;
  }

 async findOne(id: number) {
    return await prisma.comment.findUnique({where :{id: id}});
    return `This action returns a #${id} moderator`;
  }

 async update(id: number, updateAdminDto: UpdateAdminDto) {
    return await prisma.comment.update( { where: { id },
      data: {   content: updateAdminDto.content,
        createdAt: updateAdminDto.createdAt,
        // authorId: updateAdminDto.authorId,
        threadId: updateAdminDto.threadId,
        canvasAction: updateAdminDto.canvasAction,
        canvasSession: updateAdminDto.canvasSession,
        canvasHash: updateAdminDto.canvasHash },});
    //only the super user can update a moderator
    return `This action updates a #${id} moderator`;
  }
  removeThread(id: string){
    return `This action removed a thread `
  }
  //lock and unlock refactor to "toggle thread visability" 
  lockThread(id: string){
    return `This action locks a thread`
  }
  unlockThread(id: string){
    return `This action unlocks a threa`
  }

 async remove(id: number) {
    return await prisma.comment.delete({ where: { id } });

    //only the super user can remove a moderator
    return `This action removes a #${id} admin`;
  }
}
