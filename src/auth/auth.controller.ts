import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorators';
import { CreateAuthDto, CreateLoginDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Public()
  // @Post()
  // create(@Body() createAuthDto: CreateAuthDto) {
  //   return this.authService.create(createAuthDto);
  // }
  // @Public()
  // @Get()
  // findAll() {
  //   return this.authService.findAll();
  // }
  // @Public()
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authService.findOne(+id);
  // }
  // @Public()
  // @Patch(':id')
  // // update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
  // //   return this.authService.update(+id, updateAuthDto);
  // // }
  // @Public()
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authService.remove(+id);
  // }

  // @Public()
  // @Post('/profile/login')
  // login(@Body() createLoginDto: CreateLoginDto) {
  //   return this.authService.login(createLoginDto);
  // }

  // @Public()
  // @Post('/profile/sig')
  // sigVerify(@Body() createLoginDto: CreateLoginDto) {
  //   return this.authService.sigVerify(createLoginDto);
  // }
}
