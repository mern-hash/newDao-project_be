// import { ApiProperty } from '@nestjs/swagger';

// export class CreateThreadDto {
//     @ApiProperty({
//         description: "The author of the thread"
//     })
//     readonly author: String;

//     @ApiProperty({
//         required: false,
//         description: "Body text of the thread"
//     })
//     readonly body: String

//     @ApiProperty({
//         required: false,
//         description: "thread category chosen from the available category"
//     })
//     readonly category: String

//     @ApiProperty({
//         required: false,
//         description: "thread tags chosen from the available tags"
//     })
//     readonly tag: String[]
// }


// import { ApiProperty } from '@nestjs/swagger';

// export class CreateThreadDto {
//   @ApiProperty()
//   title: string;

//   @ApiProperty()
//   content: string;

// //   @ApiProperty()
// //   viewCount: number;

//   @ApiProperty()
//   authorId: number;

//   @ApiProperty()
//   canvasAction: string;

//   @ApiProperty()
//   canvasSession: string;

// //   @ApiProperty()
// //   canvasHash: string;
// }

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
    // description: "thread tags chosen from the available tags"
   })
   readonly canvasHash?: string
}


// import { ApiProperty } from '@nestjs/swagger';

// // export class CreateThreadDto {
// //   @ApiProperty({ description: 'The title of the thread', example: 'My first thread' })
// //   title: string;

// //   @ApiProperty({ description: 'The content of the thread', example: 'This is the content of my first thread' })
// //   content: string;

// //   @ApiProperty({ description: 'The number of views of the thread', example: 0 })
// //   viewCount: number;

// //   @ApiProperty({ description: 'The ID of the author of the thread', example: 1 })
// //   authorId: number;

// //   @ApiProperty({ description: 'The canvas action of the thread', example: 'create' })
// //   canvasAction: string;

// //   @ApiProperty({ description: 'The canvas session of the thread', example: 'session123' })
// //   canvasSession: string;

// //   @ApiProperty({ description: 'The canvas hash of the thread', example: 'hash123' })
// //   canvasHash: string;
// // }
// export class CreateThreadDto {
//     @ApiProperty()
//     title: string;
  
//     @ApiProperty()
//     content: string;
  
//     @ApiProperty()
//     viewCount: number;
  
//     @ApiProperty()
//     authorId: number;
  
//     @ApiProperty()
//     canvasAction: string;
  
//     @ApiProperty()
//     canvasSession: string;
  
//     @ApiProperty()
//     canvasHash: string;
//   }
 
  
  
  
// import { ApiProperty } from '@nestjs/swagger';

// export class CreateThreadDto {
//     @ApiProperty()
//     readonly title: string;

//     @ApiProperty({required: false})
//     readonly content: string

//     @ApiProperty({required: false})
//     readonly viewCount: string

//     @ApiProperty({required: false})
//     readonly authorId: string

//     @ApiProperty({required: false})
//     readonly canvasAction: string

//     @ApiProperty({required: false})
//     readonly canvasSession: string

//     @ApiProperty({required: false})
//     readonly canvasHash: string
// }


  // import { ApiProperty } from '@nestjs/swagger';
  // import { Upvote, User } from '@prisma/client';

  // export class CreateThreadDto {
  
  //   @ApiProperty()
  //   readonly title: string;

  //   @ApiProperty()
  //   readonly content: string;

  //   @ApiProperty()
  //   readonly viewCount: number;

  //   @ApiProperty()
  //   readonly createdAt: Date;

  //   @ApiProperty()
  //   readonly authorId: number;

  // //   @ApiProperty({ type: () => User })
  // //   author: User;

  // //   @ApiProperty({ type: () => [Comment] })
  // //   comments: Comment[];

  // //   @ApiProperty({ type: () => [Upvote] })
  // //   upvotes: Upvote[];

  //   @ApiProperty()
  //   readonly canvasAction: string;

  //   @ApiProperty()
  //   readonly  canvasSession: string;

  //   @ApiProperty()
  //   readonly canvasHash: string;
  // }





//   import { ApiProperty } from '@nestjs/swagger';

// export class CreateThreadDto {
//   @ApiProperty()
//   title: string;

//   @ApiProperty()
//   content: string;

//   @ApiProperty()
//   viewCount: number;

//   @ApiProperty()
//   createdAt:Date;

//   @ApiProperty()
//   authorId: number;

//   @ApiProperty()
//   canvasAction: string;

//   @ApiProperty()
//   canvasSession: string;

//   @ApiProperty()
//   canvasHash: string;
// }
