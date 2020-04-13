import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts = [
    {
      title: 'Modjo',
      content: 'I love my dog so much',
      loveIts: 0,
    },
    {
      title: 'Loick',
      content: 'My brother is a good cook',
      loveIts: 0,
    },
    {
      title: 'Youyou',
      content: 'My other brother is super sarcastic',
      loveIts: 0,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
