import { Subjects, Publisher, PaymentCreatedEvent } from '@hoangnams/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
