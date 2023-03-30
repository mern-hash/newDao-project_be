import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Injectable()
export class AdminService {
  create(createAdminDto: CreateAdminDto) {
    return 'This action adds a new admin to a space';
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

  findAll() {
    return `This action returns all moderators of a space`;
  }

  findOne(id: number) {
    return `This action returns a #${id} moderator`;
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
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

  remove(id: number) {
    //only the super user can remove a moderator
    return `This action removes a #${id} admin`;
  }
}
