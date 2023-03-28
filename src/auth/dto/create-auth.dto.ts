import { ApiProperty } from "@nestjs/swagger";

export class CreateAuthDto {
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
    readonly authorId: Number
    
  //   @ApiProperty()
  // readonly author: string;

   @ApiProperty()
  readonly commentId: number;


  //  @ApiProperty()
  // readonly comment: string;

  // @ApiProperty()
  // readonly upvotes?: number;

  // @ApiProperty()
  // readonly replies?: number;

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

  //  @ApiProperty()
  //    upvotes?: string;}

}
export class CreateLoginDto {
  @ApiProperty()
  readonly sig: string;
  @ApiProperty()
  readonly address: string;
  @ApiProperty()
  readonly nonce: string;
  @ApiProperty()
  readonly msg: string;
}
