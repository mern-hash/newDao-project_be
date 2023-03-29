import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Public } from 'src/auth/decorators/public.decorators';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/role-enums/role.enum';
import { DiscussionsService } from './discussions.service';
import { CreateCategoriesDiscussionsService } from './dto/create-categories-discussions.dto';
import { CreateCommentDiscussionsService } from './dto/create-comment-discussions.dto';
import { CreateDiscussionsService } from './dto/create-discussions.dto';
import { CreateTagsDiscussionsService } from './dto/create-tags-discussions.dto';
import { CreateThreadDiscussionsService } from './dto/create-thread-discussions.dto';
import { CreateViewDiscussionsService } from './dto/create-view-discussions.dto';


@Controller('discussions')
export class DiscussionsController {
  constructor(private readonly discussionsService: DiscussionsService) {}

  @Public()
  @Post('/categories')
  postCategories(@Body() createCategoriesDiscussionsService: CreateCategoriesDiscussionsService) {
    return this.discussionsService.postCategories(createCategoriesDiscussionsService);
  }

  
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
  @Public()
  // @Roles(Role.User)
  @Post('/threads')
  postThreads(@Body() createThreadDiscussionsService: CreateThreadDiscussionsService) {
    return this.discussionsService.postThreads(createThreadDiscussionsService);
  }

  @Public()
  @Get('/thread/:id')
  threadsfindOne(@Param('id') id: string) {
    return this.discussionsService.threadsfindOne(+id);
  }
  @Public()
  @Get('/comments')
  getComments() {
    return this.discussionsService.getCategories();
  }
  @Roles(Role.User)
  @Post('/comments')
  postComments(@Body() createCommentDiscussionsService: CreateCommentDiscussionsService) {
    return this.discussionsService.postComments(createCommentDiscussionsService);
  }

  

  @Public()
  @Get('/tags')
  getTags() {
    return this.discussionsService.getTags();
  }
  @Roles(Role.Admin)
  @Post('/tags')
  postTags(@Body() createTagsDiscussionsService: CreateTagsDiscussionsService) {
    return this.discussionsService.postTags(createTagsDiscussionsService);
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
  postProfile(@Body() createDiscussionsService: CreateDiscussionsService) {
    return this.discussionsService.postProfile(createDiscussionsService);
  }

  @Public()
  @Get('/profile/:id')
  profilefindOne(@Param('id') id: string) {
    return this.discussionsService.profilefindOne(+id);
  }

  @Roles(Role.User)
  @Post('/view')
  postView(@Body() CreateViewDiscussionsService: CreateViewDiscussionsService) {
    return this.discussionsService.postView(CreateViewDiscussionsService);
  }
  @Public()

  @Patch('/profile/:id')
  profileUpdate(@Param('id') id: string, @Body() CreateDiscussionsService: CreateDiscussionsService) {
    return this.discussionsService.profileUpdate(+id, CreateDiscussionsService);
  }
  // @Public()
  // // @Roles(Role.User,Role.Admin)
  // @Patch('/profile')
  // patchProfile() {
  //   return this.discussionsService.patchProfile();
  // }

  @Public()
  // @Roles(Role.User,Role.Admin)
  @Patch('/reaction')
  patchReaction() {
    return this.discussionsService.patchReaction();
  }
  @Public()

  @Patch('/thread/:id')
  threadsUpdate(@Param('id') id: string, @Body() createThreadDiscussionsService: CreateThreadDiscussionsService) {
    return this.discussionsService.threadsUpdate(+id, createThreadDiscussionsService);
  }
  
  // @Public()
  @Roles(Role.User,Role.User)
  @Delete('/thread')
  deleteThread() {
    return this.discussionsService.deleteThread();
  }
  

  @Public()
  // @Roles(Role.User,Role.Admin)
  @Delete('/comments')
  deleteComments() {
    return this.discussionsService.deleteComments();
  }

   @Public()
  // @Roles(Role.User,Role.Admin)
  @Delete('/tags')
  deleteTags() {
    return this.discussionsService.deleteTags();
  }

  @Public()
  // @Roles(Role.User,Role.Admin)
  @Delete('/categories')
  deleteCategories() {
    return this.discussionsService.deleteCategories();
  }

  @Public()
  // @Roles(Role.User,Role.Admin)
  @Delete('/suspend')
  deleteSuspends() {
    return this.discussionsService.deleteSuspends();
  }
}
