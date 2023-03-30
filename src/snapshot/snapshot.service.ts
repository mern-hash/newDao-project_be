import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDelegateSnapshotService } from './dto/create-delegate.dto';
import { CreateProposalSnapshotService } from './dto/create-proposal.dto';
import { CreateSnapshotDto } from './dto/create-snapshot.dto';
import { CreateVoteSnapshotService } from './dto/create-vote.dto';
import { UpdateSnapshotDto } from './dto/update-snapshot.dto';

const prisma = new PrismaClient();

@Injectable()
export class SnapshotService {
  constructor(private prisma: PrismaService) {}

  postProposal(CreateProposalSnapshotService: CreateProposalSnapshotService) {
    const profile: any = {
      address: CreateProposalSnapshotService.address,
      name: CreateProposalSnapshotService.name,
      bio: CreateProposalSnapshotService.bio,
      role: CreateProposalSnapshotService.role,
    
    };
    console.log('profile', profile);
    return this.prisma.proposal.create({ data: profile });
  }


  create(createSnapshotDto: CreateSnapshotDto) {
    const profile: any = {
      id:createSnapshotDto.userId,
  userId: createSnapshotDto.userId,
  commentId: createSnapshotDto.commentId,
  replyId: createSnapshotDto.replyId,
  threadId: createSnapshotDto.threadId
};
   return this.prisma.upvote.create({ data: profile });
    return 'This action adds a new snapshot';
  }

async findAll() {
    return await prisma.upvote.findMany();

    return `This action returns all snapshot`;
  }

 async findOne(id: number) {
  return await prisma.upvote.findUnique({where :{id: id}});
    return `This action returns a #${id} snapshot`;
  }

  update(id: number, updateSnapshotDto: UpdateSnapshotDto) {
    return `This action updates a #${id} snapshot`;
  }

 async remove(id: number) {
    return await prisma.user.delete({ where: { id } });
    return `This action removes a #${id} snapshot`;
  }
 async getProposal() {
    return await prisma.proposal.findMany();
  }
  
 async getvotes() {
    return await prisma.vote.findMany();

  }
  postVote(CreateVoteSnapshotService: CreateVoteSnapshotService) {
    const thread: any = {
      id: CreateVoteSnapshotService.id,
      title: CreateVoteSnapshotService.title,
      content: CreateVoteSnapshotService.content,
      viewCount: CreateVoteSnapshotService.viewCount,
      createdAt: CreateVoteSnapshotService.createdAt,
      authorId: CreateVoteSnapshotService.authorId,
      canvasAction: CreateVoteSnapshotService.canvasAction,
      canvasSession: CreateVoteSnapshotService.canvasSession,
      canvasHash: CreateVoteSnapshotService.canvasHash,
    };
    console.log("thread",thread)
    return this.prisma.vote.create({ data: thread });
}

  postDelegate(CreateDelegateSnapshotService: CreateDelegateSnapshotService) {
    const thread: any = {
      id: CreateDelegateSnapshotService.id,
      title: CreateDelegateSnapshotService.title,
      content: CreateDelegateSnapshotService.content,
      viewCount: CreateDelegateSnapshotService.viewCount,
      createdAt: CreateDelegateSnapshotService.createdAt,
      authorId: CreateDelegateSnapshotService.authorId,
      canvasAction: CreateDelegateSnapshotService.canvasAction,
      canvasSession: CreateDelegateSnapshotService.canvasSession,
      canvasHash: CreateDelegateSnapshotService.canvasHash,
    };
    console.log("thread",thread)
    return this.prisma.delegate.create({ data: thread });
}

}
