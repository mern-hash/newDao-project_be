import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

@Injectable()
export class DiscussionsService {
  constructor() {}

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
  async postProfile() {
    return `Create profile`;
    // return await prisma.user.create({
    //   data: {
    //     address: 'guyygu156486464654',
    //     name: 'sid',
    //     bio: 'bio',
    //     twitter: 'twitter',
    //     telegram: 'telegram',
    //     discord: 'discord',
    //     nonce: 'gygyg',
    //   },
    // });
  }

  postThreads() {
    return `Create a thread`;
  }
  postComments() {
    return `Create a comment`;
  }

  postView() {
    return `Create a view`;
  }
  postTags() {
    return `Create a tag`;
  }
  postCategories() {
    return `Create a category `;
  }
}
