import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { Notification, NotificationType } from '../models/notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notificationSubject: Subject<Notification> = new Subject<Notification>();

  showMessage(message: Notification) {
    this.notificationSubject.next(message);
  }

  constructor(private toastrService: ToastrService) {
    this.listenForMessages();
  }

  listenForMessages() {
    this.notificationSubject.subscribe(message => {
      switch (message.type) {
        case NotificationType.success:
          this.toastrService.success(message.message);
          break;
        case NotificationType.error:
          this.toastrService.error(message.message);
          break;
        case NotificationType.warning:
          this.toastrService.warning(message.message);
          break;
        case NotificationType.info:
          this.toastrService.info(message.message);
          break;
        default:
          this.toastrService.info(message.message);
          break;
      }
    }, err => {
      console.log('Error when processing toastr message');
    });
  }
}
