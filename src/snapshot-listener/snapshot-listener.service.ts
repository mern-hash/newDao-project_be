import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class SnapshotListenerService {
    constructor(
        private eventEmitter: EventEmitter2,
        private readonly httpService: HttpService) { }

    

    async findNewProposal(id: string, eventType: string) {
        try {
            const response = await this.httpService.post('https://hub.snapshot.org/graphql', {
                query: `
                        query($id: String!) {
                            proposal(id: $id) {
                            id
                            title
                            body
                            start
                            choices
                            end
                            space {
                                name
                                id
                            }
                            }
                        }
                        `,
                variables: { id },
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });

            return response
        }catch{
            throw new NotFoundException('Snapshot proposal not found')
        }
    }
}
