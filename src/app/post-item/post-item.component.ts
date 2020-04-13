import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 1000);
  });

  constructor() {}

  ngOnInit(): void {}

  public counter: number = 0;

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }

  getStatus() {
    return this.postContent;
  }

  getColor() {
    if (this.counter > 0) {
      return 'green';
    } else if (this.counter < 0) {
      return 'red';
    }
  }
}
