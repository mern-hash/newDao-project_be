import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from '../dto/create-comment.dto';

@Injectable()
export class CommentsService {
    create(CreateCommentDto: CreateCommentDto) {
        return 'This action adds a new comment';
    }

    findAll(id: number, spaceId: string) {
        return `This action returns all comments in ${spaceId}, thread id ${id}`;
    }
    reaction(id: number, spaceId: string) {
        //this is a toggle reaction users can upvote (add reaction) in the first interaction 
        //on the second reaction the upvote is deleted (remove reaction)
        return `This action adds or removed an upvote on a comment #${id} in space ${spaceId}`
    }
    remove(id: number, spaceId: string) {
        //comments can be removed by a user or moderator
        return `This action removes a #${id} comment in ${spaceId}`;
    }
}
