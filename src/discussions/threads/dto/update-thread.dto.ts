import { PartialType } from '@nestjs/mapped-types';
import { CreateThreadDto } from './create-thread.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateThreadDto extends PartialType(CreateThreadDto) {
    @ApiProperty({
        description: "Toggle if the thread has been approved by a moderator The thread will not show on the front end until this has been toggled"
    })
    readonly moderatorApproved: Boolean
}
