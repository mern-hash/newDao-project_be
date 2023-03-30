// import { ApiProperty } from '@nestjs/swagger';

// export class CreateCommentDto {
//     @ApiProperty({
//         description: "The space ID to post in",
//         example: "apecoin.eth"
//     })
//     readonly spaceId: String;
//     @ApiProperty({
//         description: "The author of the comment"
//     })
//     readonly author: String;

//     @ApiProperty({
//         required: false,
//         description: "Body text of the comment"
//     })
//     readonly body: String

//     @ApiProperty({
//         required: false,
//         description: "Id of the thread"
//     })
//     readonly threadId: String
// }


import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty({
    description: 'The space ID to post in',
    example: 'apecoin.eth',
  })
  readonly title: String;
  @ApiProperty({
    description: 'The author of the comment',
  })
  readonly content: String;

  @ApiProperty({
    required: false,
    description: 'Body text of the comment',
  })
  readonly viewCount: Number;

  @ApiProperty({
    required: false,
    description: 'Id of the thread',
  })
  readonly authorId: String;

  @ApiProperty({
    required: false,
    description: 'Id of the thread',
  })
  readonly canvasAction: String;

  @ApiProperty({
    required: false,
    description: 'Id of the thread',
  })
  readonly canvasSession: String;

  @ApiProperty({
    required: false,
    description: 'Id of the thread',
  })
  readonly canvasHash: String;
}
