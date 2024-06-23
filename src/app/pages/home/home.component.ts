import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { TableComponent } from '../../components/table/table.component';
import { PostInterface } from '../../types/post.interface';
import { LoadingComponent } from '../../components/loading/loading.component';
import { CommonModule } from '@angular/common';
import { DialogComponent } from '../../components/dialog/dialog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ TableComponent, LoadingComponent, CommonModule, DialogComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  isVisible: boolean = false;
  posts: PostInterface[] = [];
  formData: any;
  post!: any;
  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((res) => {
      this.loading = true;
      console.log(typeof(res));
      this.posts = res;
      this.loading = false;
    });
  }

  deletePost(id: number): void {
    this.postService.deletePost(id).subscribe(() => {
      this.loading = true;
      this.posts = this.posts.filter(post => post.id !== id);
      this.loading = false;
    });
  }

  openModal() {
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
  }

  createPost () {
    console.log('POST CRIADO');
  }

}
