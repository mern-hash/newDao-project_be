import { ApiProperty } from '@nestjs/swagger';

export class CreateNotificationDto {
  @ApiProperty({
    description: 'space Id',
  })
  readonly spaceId: string;

  @ApiProperty({
    description: 'address of user receiving notification',
  })
  readonly address: string;

  @ApiProperty({
    description: 'Body of the notification',
  })
  readonly body: string;

  @ApiProperty({
    description: 'Body of the notification',
  })
  readonly nonce: string;
}
