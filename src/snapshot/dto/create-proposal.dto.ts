import { ApiProperty } from '@nestjs/swagger';

export class CreateProposalSnapshotService {
  @ApiProperty()
  readonly id: Number;

  @ApiProperty()
  readonly address: string;

  @ApiProperty({ required: false })
  readonly name: string;

  @ApiProperty({ required: false })
  readonly bio: string;

  @ApiProperty({ required: false })
  readonly role: string;


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

