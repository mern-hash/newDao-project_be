import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateLoginDto, CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Public } from 'src/auth/decorators/public.decorators';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/role-enums/role.enum';
import { JwtService } from '@nestjs/jwt';

@Controller('profile')
export class ProfileController {
  constructor(
    private readonly profileService: ProfileService,
    private jwtService: JwtService,
  ) {}

  @Public()
  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profileService.create(createProfileDto);
  }
  @Public()
  @Roles(Role.Admin)
  @Get()
  findAll() {
    return this.profileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profileService.update(+id, updateProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profileService.remove(+id);
  }
  // http://localhost:4000/profile

  // @Public()
  // @Post('/profile/login')
  // login(@Body() createLoginDto: CreateLoginDto) {
  //   return this.profileService.login(createLoginDto);
  // }

  // @Public()
  // @Post('/profile/sig')
  // sigVerify(@Body() createLoginDto: CreateLoginDto) {
  //   return this.profileService.sigVerify(createLoginDto);
  // }
  // @Public()
  // @Post('/profile/createSigVerify')
  // createSigVerify(@Body() createLoginDto: CreateLoginDto) {
  //   return this.profileService.createSigVerify(createLoginDto);
  // }
}
