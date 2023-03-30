// export class CreateSnapshotDto {}

import { ApiProperty } from '@nestjs/swagger';

export class CreateSnapshotDto {
    @ApiProperty()
    readonly id?: Number; 

    @ApiProperty()
    readonly userId: Number;

    @ApiProperty({required: false})
    readonly commentId: Number

    @ApiProperty({required: false})
    readonly replyId: Number

    @ApiProperty({required: false})
    readonly threadId: Number
}
