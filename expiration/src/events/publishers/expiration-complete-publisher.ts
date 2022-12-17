import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@hoangnams/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
