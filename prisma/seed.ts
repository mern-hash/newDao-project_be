// // prisma/seed.ts

// import { PrismaClient } from '@prisma/client';
// import { faker } from '@faker-js/faker';

// // initialize Prisma Client
// const prisma = new PrismaClient();

// async function main() {
//     async function seedUsers() {
//         for (let i = 0; i < 100; i++) {
//             await prisma.user.create({
//               data: {
//                 address: 'faker.finance.ethereumAddress()',
//                 name: 'faker.name.fullName()',
//                 bio: 'faker.lorem.sentence()',
//                 twitter: 'faker.lorem.sentence()',
//                 telegram: 'giugg',
//                 discord: 'uuull',
//                 // nonce: 'll',
//               },
//             });
//         }
//     }

//     async function seedThreads() {
//         const users = await prisma.user.findMany();
//         for (let i = 0; i < 10; i++) {
//             await prisma.thread.create({
//                 data: {
//                     title: faker.lorem.sentence(),
//                     content: faker.lorem.paragraphs(),
//                     authorId: users[i % users.length].id,
//                     canvasAction: faker.datatype.uuid(),
//                     canvasSession: faker.datatype.uuid(),
//                     canvasHash: faker.datatype.uuid(),
//                 },
//             });
//         }
//     }

//     async function seedComments() {
//         const users = await prisma.user.findMany();
//         console.log(users)
//         const threads = await prisma.thread.findMany();
//         console.log(threads)
//         for (let i = 0; i < 20; i++) {
//             await prisma.comment.create({
//                 data: {
//                     content: faker.lorem.sentences(),
//                     authorId: users[i % users.length].id,
//                     threadId: threads[i % threads.length].id,
//                     canvasAction: faker.datatype.uuid(),
//                     canvasSession: faker.datatype.uuid(),
//                     canvasHash: faker.datatype.uuid(),
//                 },
//             });
//         }
//     }

//     async function seedReplies() {
//         const users = await prisma.user.findMany();
//         const comments = await prisma.comment.findMany();
//         for (let i = 0; i < 30; i++) {
//             await prisma.reply.create({
//                 data: {
//                     content: faker.lorem.sentence(),
//                     authorId: users[i % users.length].id,
//                     commentId: comments[i % comments.length].id,
//                     canvasAction: faker.datatype.uuid(),
//                     canvasSession: faker.datatype.uuid(),
//                     canvasHash: faker.datatype.uuid(),
//                 },
//             });
//         }
//     }

//     async function seedUpvotes() {
//         const users = await prisma.user.findMany();
//         const comments = await prisma.comment.findMany();
//         const replies = await prisma.reply.findMany();
//         const threads = await prisma.thread.findMany();
//         for (let i = 0; i < 50; i++) {
//             const upvotedComment = comments[i % comments.length];
//             const upvotedReply = replies[i % replies.length];
//             const upvotedThread = threads[i % threads.length];
//             await prisma.upvote.create({
//                 data: {
//                     userId: users[i % users.length].id,
//                     commentId: upvotedComment ? upvotedComment.id : undefined,
//                     replyId: upvotedReply ? upvotedReply.id : undefined,
//                     threadId: upvotedThread ? upvotedThread.id : undefined,
//                 },
//             });
//         }
//     }

//     // Clear the database
//     await prisma.upvote.deleteMany()
//     await prisma.reply.deleteMany()
//     await prisma.comment.deleteMany()
//     await prisma.thread.deleteMany()
//     await prisma.user.deleteMany()

//     await seedUsers()
//     await seedThreads()
//     await seedComments()
//     await seedReplies()
//     await seedUpvotes()
// }

// // execute the main function
// main()
//     .catch((e) => {
//         console.error(e);
//         process.exit(1);
//     })
//     .finally(async () => {
//         // close Prisma Client at the end
//         await prisma.$disconnect();
//     });





// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
    async function seedUsers() {
        for (let i = 0; i < 10; i++) {
            await prisma.user.create({
                data: {
                    address: faker.finance.ethereumAddress(),
                    name: faker.name.fullName(),
                    bio: faker.lorem.sentence(),
                    twitter: faker.internet.userName(),
                    telegram: faker.internet.userName(),
                    discord: faker.internet.userName(),
                    nonce : faker.internet.userName(),
                },
            });
        }
    }

    async function seedThreads() {
        const users = await prisma.user.findMany();
        for (let i = 0; i < 1; i++) {
            await prisma.thread.create({
                data: {
                    title: faker.lorem.sentence(),
                    content: faker.lorem.paragraphs(),
                    authorId: users[i % users.length].id,
                    canvasAction: faker.datatype.uuid(),
                    canvasSession: faker.datatype.uuid(),
                    canvasHash: faker.datatype.uuid(),
                },
            });
        }
    }

    async function seedComments() {
        const users = await prisma.user.findMany();
        console.log(users)
        const threads = await prisma.thread.findMany();
        console.log(threads)
        for (let i = 0; i < 2; i++) {
            await prisma.comment.create({
                data: {
                    content: faker.lorem.sentences(),
                    authorId: users[i % users.length].id,
                    threadId: threads[i % threads.length].id,
                    canvasAction: faker.datatype.uuid(),
                    canvasSession: faker.datatype.uuid(),
                    canvasHash: faker.datatype.uuid(),
                },
            });
        }
    }

    async function seedReplies() {
        const users = await prisma.user.findMany();
        const comments = await prisma.comment.findMany();
        for (let i = 0; i < 3; i++) {
            await prisma.reply.create({
                data: {
                    content: faker.lorem.sentence(),
                    authorId: users[i % users.length].id,
                    commentId: comments[i % comments.length].id,
                    canvasAction: faker.datatype.uuid(),
                    canvasSession: faker.datatype.uuid(),
                    canvasHash: faker.datatype.uuid(),
                },
            });
        }
    }

    async function seedUpvotes() {
        const users = await prisma.user.findMany();
        const comments = await prisma.comment.findMany();
        const replies = await prisma.reply.findMany();
        const threads = await prisma.thread.findMany();
        for (let i = 0; i < 5; i++) {
            const upvotedComment = comments[i % comments.length];
            const upvotedReply = replies[i % replies.length];
            const upvotedThread = threads[i % threads.length];
            await prisma.upvote.create({
                data: {
                    userId: users[i % users.length].id,
                    commentId: upvotedComment ? upvotedComment.id : undefined,
                    replyId: upvotedReply ? upvotedReply.id : undefined,
                    threadId: upvotedThread ? upvotedThread.id : undefined,
                },
            });
        }
    }

    // Clear the database
    // await prisma.upvote.deleteMany()
    // await prisma.reply.deleteMany()
    // await prisma.comment.deleteMany()
    // await prisma.thread.deleteMany()
    // await prisma.user.deleteMany()

    // await seedUsers()
    // await seedThreads()
    // await seedComments()
    // await seedReplies()
    // await seedUpvotes()
}

// execute the main function
main()
    .catch((e) => {
        console.error(e);
        console.log("first")
        process.exit(1);
    })
    .finally(async () => {
        // close Prisma Client at the end
        await prisma.$disconnect();
        console.log("first123")

    });