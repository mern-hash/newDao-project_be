import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoriesDiscussionsService {
  @ApiProperty()
  readonly id: Number;

  @ApiProperty()
  readonly address: string;

  @ApiProperty({ required: false })
  readonly name: string;

  @ApiProperty({ required: false })
  readonly bio: string;

  @ApiProperty({ required: false })
  readonly telegram: string;

  @ApiProperty({ required: false })
  readonly discord: string;

  @ApiProperty()
  readonly nonce: string;
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

