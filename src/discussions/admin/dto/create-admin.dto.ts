import { ApiProperty } from '@nestjs/swagger';
export class CreateAdminDto {
  @ApiProperty()
  readonly id?: Number;

  @ApiProperty({
    required: false,
  })
  readonly content?: string;

  @ApiProperty({
    required: false,
    description: 'thread category chosen from the available category',
  })
  readonly createdAt?: Date;

  @ApiProperty({
    required: false,
    description: 'thread tags chosen from the available tags',
  })
  readonly authorId: Number;


  @ApiProperty()
  readonly threadId: number;

  

  @ApiProperty({
    required: false,
    description: 'thread tags chosen from the available tags',
  })
  readonly canvasAction?: string;

  @ApiProperty({
    required: false,
    description: 'thread tags chosen from the available tags',
  })
  readonly canvasSession?: string;

  @ApiProperty({
    required: false,
    // description: "thread tags chosen from the available tags"
  })
  readonly canvasHash?: string;
}
