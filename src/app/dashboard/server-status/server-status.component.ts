import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('unknown');
  destroyRef = inject(DestroyRef);
  // Why use signal instead of a regular property? Because signal is a reactive property 
  // that can be subscribed to. In other words, I can set up a listener that will be notified.

  constructor() {
    effect(() => {
      console.log("This is the current server status ", this.currentStatus());
    })//what is the purpost of this effect? 
    //This effect will log the current status of the server whenever it changes.
  }

  ngOnInit() {
    console.log('ngOnInit');
    const interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd > 0.5) {
        this.currentStatus.set('online')
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline')
      } else {
        this.currentStatus.set('unknown')
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      console.log('destroy works');
      clearInterval(interval);
    });
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
}
