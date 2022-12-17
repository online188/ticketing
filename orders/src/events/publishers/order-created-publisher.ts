import { Publisher, OrderCreatedEvent, Subjects } from '@hoangnams/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
