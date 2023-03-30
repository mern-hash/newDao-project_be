import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from '../dto/create-notification.dto';

@Injectable()
export class NotificationsService {
    create(CreateNotificationDto: CreateNotificationDto){
        return 'This action creates a notification for a user'
    }
    findAll(userAddress: string, spaceId: string){
        return `This action shows all active notification for ${userAddress} in space ${spaceId}`
    }
    markAsRead(commetnId: string, spaceId: string){
        return `This action marks a ${commetnId} as read in ${spaceId}`
    }
    remove(commetnId: string){
        return `This action deletes ${commetnId} comment from a users profile`
    }
}
