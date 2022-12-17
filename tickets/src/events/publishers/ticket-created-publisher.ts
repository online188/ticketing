import { Publisher, Subjects, TicketCreatedEvent } from '@hoangnams/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
