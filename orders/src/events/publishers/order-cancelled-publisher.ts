import { Subjects, Publisher, OrderCancelledEvent } from '@hoangnams/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
