import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SnapshotService } from './snapshot.service';
import { CreateSnapshotDto } from './dto/create-snapshot.dto';
import { UpdateSnapshotDto } from './dto/update-snapshot.dto';
import { Public } from 'src/auth/decorators/public.decorators';

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
  postProposal() {
    return this.snapshotService.postProposal();
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
  postVote() {
    return this.snapshotService.postVote();
  }
  @Public()
  @Post('/post/delegate')
  postDelegate() {
    return this.snapshotService.postDelegate();
  }
}
