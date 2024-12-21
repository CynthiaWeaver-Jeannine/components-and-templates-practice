import {
  AfterViewInit,
  Component,
  ElementRef,
  output,
  ViewChild,
} from '@angular/core';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  
  add = output<{ title: string; ticketText: string }>();

  ngAfterViewInit(): void {
    console.log('New ticket component initialized');

    this.add.subscribe((data: any) => {
      console.log('New ticket added', data);
    });
  }
  onSubmit(title: string, ticketText: string) {
    this.add.emit({ title: title, ticketText: ticketText });
    this.form?.nativeElement.reset();
  }
}
