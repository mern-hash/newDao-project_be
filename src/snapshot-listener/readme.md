# Snapshot listener

This resource listens to the snapshot web hook for events. Once an event is emitted, a graph QL request to send to the snapshot API. The return of this request is stored inside the database for future processing.


# Snapshot Events

`proposal/created` When a new proposal is created

`proposal/start` When the voting period for a proposal starts.

`proposal/end` When the voting period for a proposal ends.

`proposal/deleted` When a proposal is deleted by the author or an admin of the space.
