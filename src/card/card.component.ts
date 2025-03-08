import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title!: string;
  @Input() placeholder: string = '';
  @Input() value!: string;
  @Input() tabIndex: number = 0;
  @Input() maxLength!: number;
  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('searchInput') searchInput!: ElementRef;

  ngOnInit() {}

  startSearch() {
    this.value = this.searchInput.nativeElement.value;
    this.changed.emit(this.value);
  }
}
