import { ApiProperty } from '@nestjs/swagger';

export class CreateTagsDiscussionsService {
  @ApiProperty()
  readonly address: string;

  @ApiProperty({ required: false })
  readonly name: string;

  @ApiProperty({ required: false })
  readonly bio: string;

  @ApiProperty({ required: false })
  readonly role: string;

  @ApiProperty({ required: false })
  readonly categories: string;



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

