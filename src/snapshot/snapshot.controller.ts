import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SnapshotService } from './snapshot.service';
import { CreateSnapshotDto } from './dto/create-snapshot.dto';
import { UpdateSnapshotDto } from './dto/update-snapshot.dto';
import { Public } from 'src/auth/decorators/public.decorators';
import { CreateProposalSnapshotService } from './dto/create-proposal.dto';
import { CreateVoteSnapshotService } from './dto/create-vote.dto';
import { CreateDelegateSnapshotService } from './dto/create-delegate.dto';

@Controller('snapshot')
export class SnapshotController {
  constructor(private readonly snapshotService: SnapshotService) {}

  // @Post()
  // create(@Body() createSnapshotDto: CreateSnapshotDto) {
  //   return this.snapshotService.create(createSnapshotDto);
  // }
  // @Public()
  // @Get()
  // findAll() {
  //   return this.snapshotService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.snapshotService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateSnapshotDto: UpdateSnapshotDto,
  // ) {
  //   return this.snapshotService.update(+id, updateSnapshotDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.snapshotService.remove(+id);
  // }

  @Public()
  @Get('/get/proposal')
  getProposal() {
    return this.snapshotService.getProposal();
  }
  @Public()
  @Post('/post/proposal')
  postProposal(@Body() CreateProposalSnapshotService: CreateProposalSnapshotService)  {
    return this.snapshotService.postProposal(CreateProposalSnapshotService);
  }

  @Public()
  @Get('/get/votes')
  getvotes() {
    return this.snapshotService.getvotes();
  }

  // @Public()
  // @Post('/proposal')
  // postProposal() {
  //   return this.discussionsService.postProposal();

  // } @Public()
  // @Get('/proposal')
  // getProposal() {
  //   return this.discussionsService.getProposal() 
  // }
  @Public()
  @Post('/post/votes')
  postVote(@Body() createVoteSnapshotService: CreateVoteSnapshotService) {
    return this.snapshotService.postVote(createVoteSnapshotService);
  }
  @Public()
  @Post('/post/delegate')
  postDelegate(@Body() createDelegateSnapshotService: CreateDelegateSnapshotService) {
    return this.snapshotService.postDelegate(createDelegateSnapshotService);
  }
}
