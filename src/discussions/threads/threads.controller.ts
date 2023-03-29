import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ThreadsService } from './threads.service';
import { CreateThreadDto } from './dto/create-thread.dto';
import { UpdateThreadDto } from './dto/update-thread.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/role-enums/role.enum';
import { Public } from 'src/auth/decorators/public.decorators';

@Controller('threads')
export class ThreadsController {
  constructor(private readonly threadsService: ThreadsService) {}

  // @Public()
  // @Post()
  // create(@Body() createThreadDto: CreateThreadDto) {
  //   return this.threadsService.create(createThreadDto);
  // }
  
  // @Get()
  // findAll() {
  //   return this.threadsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string, spaceId: string) {
  //   return this.threadsService.findOne(+id, spaceId);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateThreadDto: UpdateThreadDto) {
  //   return this.threadsService.update(+id, updateThreadDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string, spaceId: string) {
  //   return this.threadsService.remove(id, spaceId);
  // }
}
