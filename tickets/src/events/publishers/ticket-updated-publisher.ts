import { Publisher, Subjects, TicketUpdatedEvent } from '@hoangnams/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
