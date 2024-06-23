import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { TableComponent } from '../../components/table/table.component';
import { PostInterface } from '../../types/post.interface';
import { LoadingComponent } from '../../components/loading/loading.component';
import { CommonModule } from '@angular/common';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TextareaComponent } from '../../components/textarea/textarea.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
      TableComponent,
      LoadingComponent,
      CommonModule,
      DialogComponent,
      InputComponent,
      ButtonComponent,
      ReactiveFormsModule,
      TextareaComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  isVisible: boolean = false;
  posts: PostInterface[] = [];
  postForm!: FormGroup;
  post!: any;
  constructor(private postService: PostsService) {
    this.postForm = new FormGroup({
      userId: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
      comment: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((res) => {
      this.loading = true;
      console.log(typeof(res));
      this.posts = res;
      this.loading = false;
    });
  }

  onSubmit() {
    console.log('POST FORM ', this.postForm.value);
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

  updatePost() {
    console.log('Post atualizado');
  }



}
