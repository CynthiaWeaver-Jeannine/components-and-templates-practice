import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
tickets: Ticket[] = []
onAdd(ticketData: {title: string, ticketText: string}) {
  const ticket: Ticket = {
    id: Math.random().toString(),
    title: ticketData.title,
    request: ticketData.ticketText,
    status: 'open'
  }

  this.tickets.push(ticket)
}
}
