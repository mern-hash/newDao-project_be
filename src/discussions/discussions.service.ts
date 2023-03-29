import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClient } from '@prisma/client';
import { CreateDiscussionsService } from './dto/create-discussions.dto';
import { CreateThreadDiscussionsService } from './dto/create-thread-discussions.dto';
import { CreateCategoriesDiscussionsService } from './dto/create-categories-discussions.dto';
import { CreateCommentDiscussionsService } from './dto/create-comment-discussions.dto';
import { CreateTagsDiscussionsService } from './dto/create-tags-discussions.dto';
import { CreateViewDiscussionsService } from './dto/create-view-discussions.dto';

// initialize Prisma Client
const prisma = new PrismaClient();

@Injectable()
export class DiscussionsService {
  // constructor() {}

  constructor(private prisma: PrismaClient ) {}

  postProfile(createDiscussionsService: CreateDiscussionsService) {
    const profile: any = {
      address: createDiscussionsService.address,
      name: createDiscussionsService.name,
      bio: createDiscussionsService.bio,
      telegram: createDiscussionsService.telegram,
      discord: createDiscussionsService.discord,
      nonce: createDiscussionsService.nonce,
    };
    console.log('profile', profile);
    return this.prisma.user.create({ data: profile });
  }

  async profilefindOne(id: number) {
    return await this.prisma.user.findUnique({ where: { id: id } });
  }

  getCategories() {
    return `Returns a list of categories`;
  }

  async getThreads() {
    //  `Returns a list of threads`;
    return await prisma.thread.findMany();
  }

  async login(){
    return 
  }

  getComments() {
    return `Returns a list of comments`;
  }
  getTags() {
    return `Returns a list of tags`;
  }
  getTokenbalance() {
    return `Returns the token balance of a users`;
  }
  getMembers() {
    return `Returns a list of  members`;
  }
  async getProfile() {
    return await prisma.user.findMany();
    // return `Returns a list of  members`;
  }
 

  async profileUpdate(id: number, CreateDiscussionsService: CreateDiscussionsService) {
    //update the fields returned
    return await prisma.user.update( { where: { id },
      data: { ...CreateDiscussionsService },});
    return `This action updates a #${id} profile`;
  }
  postThreads(createThreadDiscussionsService: CreateThreadDiscussionsService) {
      const thread: any = {
        // id: createThreadDiscussionsService.id,
        title: createThreadDiscussionsService.title,
        content: createThreadDiscussionsService.content,
        viewCount: createThreadDiscussionsService.viewCount,
        createdAt: createThreadDiscussionsService.createdAt,
        authorId: createThreadDiscussionsService.authorId,
        canvasAction: createThreadDiscussionsService.canvasAction,
        canvasSession: createThreadDiscussionsService.canvasSession,
        canvasHash: createThreadDiscussionsService.canvasHash,
      };
      console.log("thread",thread)
      return this.prisma.thread.create({ data: thread });
  }

  async threadsfindOne(id: number) {
    return await this.prisma.thread.findUnique({ where: { id: id } });
  }

  async threadsUpdate(id: number, createThreadDiscussionsService: CreateThreadDiscussionsService) {
    //update the fields returned
    return await prisma.thread.update( { where: { id },
      data: { ...createThreadDiscussionsService },});
    return `This action updates a #${id} profile`;
  }

  postComments(CreateCommentDiscussionsService: CreateCommentDiscussionsService) {
    const comment: any = {
      id: CreateCommentDiscussionsService.id,
      content: CreateCommentDiscussionsService.content,
      createdAt: CreateCommentDiscussionsService.createdAt,
      authorId: CreateCommentDiscussionsService.authorId,
      canvasAction: CreateCommentDiscussionsService.canvasAction,
      canvasSession: CreateCommentDiscussionsService.canvasSession,
      canvasHash: CreateCommentDiscussionsService.canvasHash
    };
  console.log("comment",comment)
  return this.prisma.comment.create({ data: comment });
  }

  postView(CreateViewDiscussionsService: CreateViewDiscussionsService) {
    const view: any = {
      id: CreateViewDiscussionsService.id,
      content: CreateViewDiscussionsService.content,
      createdAt: CreateViewDiscussionsService.createdAt,
      authorId: CreateViewDiscussionsService.authorId,
      canvasHash: CreateViewDiscussionsService.canvasHash
    };
  console.log("view",view)
  // return this.prisma.view.create({ data: view });
  }

  postTags(createTagsDiscussionsService: CreateTagsDiscussionsService) {
    const tag: any = {
      id: createTagsDiscussionsService.id,
      content: createTagsDiscussionsService.content,
      createdAt: createTagsDiscussionsService.createdAt,
      authorId: createTagsDiscussionsService.authorId,
      commentId: createTagsDiscussionsService.commentId,
      canvasAction: createTagsDiscussionsService.canvasAction,
      canvasSession: createTagsDiscussionsService.canvasSession,
      canvasHash: createTagsDiscussionsService.canvasHash,
    };
    // return this.prisma.tags.create({ data: tag });
  }

  postCategories(createCategoriesDiscussionsService: CreateCategoriesDiscussionsService) {
    const Categories: any = {
      address: createCategoriesDiscussionsService.address,
      name: createCategoriesDiscussionsService.name,
      bio: createCategoriesDiscussionsService.bio,
      discord: createCategoriesDiscussionsService.discord,
      nonce: createCategoriesDiscussionsService.nonce,
    };
    console.log("Categories",Categories)
    
    return this.prisma.categories.create({ data: Categories });
    return `Create a category `;
  }

  postProposal() {
    return `Create a category `;
    
  }
  getProposal() {
    return `Create a category `;
  }
  
  patchProfile() {
    return `Create a category `;
  }
  // async patchProfile(id: number, updateProfileDto: UpdateProfileDto) {
  //   //update the fields returned
  //   return await prisma.user.update( { where: { id },
  //     data: { ...updateProfileDto },});
  //   return `This action updates a #${id} profile`;
  // }
  patchReaction() {
    return `Create a category `;
  }
  patchThread() {
    return `Create a category `;
  }

  deleteThread() {
    return `Create a category `;
  }

  deleteComments() {
    return `Create a category `;
  }

  deleteTags() {
    return `Create a category `;
  }

  deleteCategories() {
    return `Create a category `;
  }

  deleteSuspends() {
    return `Create a category `;

  }
}
