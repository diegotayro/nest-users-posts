import { /*HttpException, HttpStatus,*/ Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PostsService {
  constructor(
    private userService: UsersService,
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}

  async createPost(post: CreatePostDto) {
    const userFound = this.userService.getUser(post.authorId);
    if (userFound) {
      const newPost = this.postRepository.create(post);
      return this.postRepository.save(newPost);
    }
  }
  getPosts() {
    return this.postRepository.find({
      relations: ['author'],
    });
  }
}
