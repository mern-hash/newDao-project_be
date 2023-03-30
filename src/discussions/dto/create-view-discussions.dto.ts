import { ApiProperty } from '@nestjs/swagger';

export class CreateViewDiscussionsService {
  @ApiProperty()
  readonly id?: Number;


    @ApiProperty({
        required: false,
    })
    readonly content?: string


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
    // description: "thread tags chosen from the available tags"
   })
   readonly canvasHash?: string
}