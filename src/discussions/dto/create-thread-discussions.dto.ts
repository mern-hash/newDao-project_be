import { ApiProperty } from '@nestjs/swagger';

export class CreateThreadDiscussionsService {
  @ApiProperty()
  readonly id?: Number;

    @ApiProperty()
    readonly title?: string;

    @ApiProperty({
        required: false,
    })
    readonly content?: string

    @ApiProperty({
        required: false,
        description: "thread category chosen from the available category"
    })
    readonly viewCount?: number


    @ApiProperty({
      required: false,
      description: "thread category chosen from the available category"
  })
  readonly createdAt?: Date

    @ApiProperty({
        required: false,
        description: "thread tags chosen from the available tags"
    })
    readonly authorId: number
    
    @ApiProperty({
        required: false,
        description: "thread tags chosen from the available tags"
    })
    readonly canvasAction?: string


   @ApiProperty({
    required: false,
    description: "thread tags chosen from the available tags"
   })
   readonly canvasSession?: string
  

   @ApiProperty({
    required: false,
    // description: "thread tags chosen from the available tags"
   })
   readonly canvasHash?: string
}