import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  http = inject(HttpClient);
  postData: any = [];

  ngOnInit(): void {
    this.fetchPostData();
  }

  fetchPostData() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((post: any) => {
      this.postData = post;
    });
  }
}
