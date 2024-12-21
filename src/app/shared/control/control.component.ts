import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterContentInit {
  label = input.required<string>();
  private el = inject(ElementRef);
  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  constructor() {
    afterRender(() => {
      console.log('Control rendered');
    }); // This will log 'Control rendered' after the component is rendered on any change in the application.

    afterNextRender(() => {
      console.log('Control next rendered');
    }); // This will log 'Control next rendered' after the component is rendered on the next change in the application.
  }

  ngAfterContentInit() {
    console.log('Control initialized');
  } // This will log 'Control initialized' after the component is initialized.

  onClick() {
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control());
  }
}
