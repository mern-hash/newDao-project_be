
import { ApiProperty } from '@nestjs/swagger';

export class CreateThreadDto {
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
    readonly viewCount?: Number


    @ApiProperty({
      required: false,
      description: "thread category chosen from the available category"
  })
  readonly createdAt?: Date

    @ApiProperty({
        required: false,
        description: "thread tags chosen from the available tags"
    })
    readonly authorId: Number
    
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
    description: "thread tags chosen from the available tags"
   })
   readonly canvasHash?: string
}


