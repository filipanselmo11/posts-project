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
import { IdGeneratorService } from '../../services/id.generator.service';

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
  post!: PostInterface;
  idGenerated!: number;
  constructor(private postService: PostsService, idGeneratorService: IdGeneratorService) {
    this.postForm = new FormGroup({
      userId: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
      comment: new FormControl('', [Validators.required])
    });
    this.idGenerated = idGeneratorService.generatedId();
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((res) => {
      this.loading = true;
      console.log(typeof (res));
      this.posts = res;
      this.loading = false;
    });
  }

  getPost(): void {
    this.postService.getPost(23).subscribe(res => {
      this.post.id = res;
    })
  }

  createPost(): void {
    if (this.postForm.valid) {
      this.postService.createPost(
        this.idGenerated,
        this.postForm.value.userId,
        this.postForm.value.title,
        this.postForm.value.body,
        this.postForm.value.comment,
      ).subscribe((res) => {
        this.isVisible = false;
        this.loading = true;
        console.log('RES', res);
        this.posts.push(res);
        this.loading = false;
      });
    }
  }

  updatePost(): void {
    console.log('Update post');
  }


  deletePost(id: number): void {
    this.postService.deletePost(id).subscribe((res) => {
      this.loading = true;
      this.posts = this.posts.filter(post => post.id !== id);
      console.log('RES ', res);
      this.loading = false;
    });
  }

  openModal(): void {
    this.isVisible = true;
  }

  closeModal(): void {
    this.isVisible = false;
  }



}
