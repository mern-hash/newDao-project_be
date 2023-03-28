import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Public } from 'src/auth/decorators/public.decorators';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/role-enums/role.enum';
import { DiscussionsService } from './discussions.service';


@Controller('discussions')
export class DiscussionsController {
  constructor(private readonly discussionsService: DiscussionsService) {}

  @Public()
  @Get('/categories')
  getCategories() {
    return this.discussionsService.getCategories();
  }

  @Public()
  @Get('/threads')
  getThreads() {
    return this.discussionsService.getThreads();
  }
  // @Public()
  @Roles(Role.User)
  @Post('/threads')
  postThreads() {
    return this.discussionsService.postThreads();
  }
  @Public()
  @Get('/comments')
  getComments() {
    return this.discussionsService.getCategories();
  }
  @Roles(Role.User)
  @Post('/comments')
  postComments() {
    return this.discussionsService.postComments();
  }
  @Public()
  @Get('/tags')
  getTags() {
    return this.discussionsService.getTags();
  }
  @Roles(Role.Admin)
  @Post('/tags')
  postTags() {
    return this.discussionsService.postTags();
  }
  @Public()
  @Get('/members')
  getMembers() {
    return this.discussionsService.getMembers();
  }
  @Public()
  @Get('/tokenbalance')
  getTokenbalance() {
    return this.discussionsService.getTokenbalance();
  }
  @Public()
  @Get('/profile')
  getProfile() {
    return this.discussionsService.getProfile();
  }
  @Public()
  // @Roles(Role.User,Role.Admin)
  @Post('/profile')
  postProfile() {
    return this.discussionsService.postProfile();
  }

  @Roles(Role.User)
  @Post('/view')
  postView() {
    return this.discussionsService.postView();
  }
}
