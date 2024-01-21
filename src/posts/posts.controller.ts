import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Post()
  createUser(@Body() newPost: CreatePostDto) {
    return this.postsService.createPost(newPost);
  }

  @Get()
  getPosts() {
    return this.postsService.getPosts();
  }
  /*
  @get
  getUserPosts() {
    return this.postsService.getUserPosts();
  }
  */
}
