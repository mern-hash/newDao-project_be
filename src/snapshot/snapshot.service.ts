import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSnapshotDto } from './dto/create-snapshot.dto';
import { UpdateSnapshotDto } from './dto/update-snapshot.dto';

const prisma = new PrismaClient();

@Injectable()
export class SnapshotService {
  constructor(private prisma: PrismaService) {}
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
  getProposal() {
    return `Returns a list of proposals`;
  }
  postProposal() {
    return `Create a proposal`;
  }

  getvotes() {
    return `Return a list of votes `;
  }
  postVote() {
    return `Create a snapshot vote `;
  }
  postDelegate() {
    return `Delegate votes `;
  }
}
