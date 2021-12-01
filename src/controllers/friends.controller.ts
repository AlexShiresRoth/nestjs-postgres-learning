import { Body, Controller, Get, Post } from '@nestjs/common';
import { Friend } from 'src/interfaces/friend.interface';
import { FriendsService } from 'src/services/friends.service';

@Controller('friends')
export class FriendsController {
  constructor(private friendsService: FriendsService) {}

  @Post('create_friend')
  async createFriend(@Body() createFriendDto: CreateFriendDto) {
    this.friendsService.createFriend(createFriendDto);
  }
  @Get('allFriends')
  async getAllFriends(): Promise<Friend[]> {
    return this.friendsService.getAllFriends();
  }
}
