# Discusion 
This is the discussion forum for the application

# Services

`Threads` users are able to post threads this is the heart of the resource. These threads have tags and categories as well as allow users to comment and upvote each other's comments

`Profile` users are able to set their bio, profile picture, username, and links. Each user receives a notification for the activity on their threads and comments from moderators 

`Admin` Admins moderate the spaces which allow for a set of users to approve threads  and make proposals (See more below)

# Proposal Creation flow
For threads looking to become proposals, there is a specific flow that must be followed. Users must be updated as their proposal is moved throughout this process

 1. A user creates a thread. Any thread created on the platform required a moderator to approve it to be posted before it is displayed on the platform
 2. If the user has put the "proposal tag" on their post then the moderators are able to create a new thread. This thread will be filled in by the moderator with time before the thread is locked (unable to be posted on) and sent to the author of the original thread.
 3. The Author of the original thread is then given the opportunity to edit the thread before they mark it as live 
 4. Once the draft has been locked the moderator will then create a snapshot proposal from the backend.

# Admins
Admins are broken into three categories described in auth
`Moderators`
Tied to a spaceId these actors are able to:
	
 - approve/ reject posts
 - Create/ remove tags
 - Create/ remove categories 
 - Lock/ unlock threads (stop the ability to comment)
 - move threads (update tags and categories for threads)
 - Delete comments 
 - Suspend users 
 - Remove threads
 - add status tags to proposals (these tags alert the user of each of what state their proposal is in)

`Super users`
Tied to a spaceId these actors are able to do everything a 		moderator can do additionally they can: 
 - Add and remove moderators

`Controller`
This actor is able to create a new space given a snapshot spaceId. when a space is created a new API key is generated for that front end. 

