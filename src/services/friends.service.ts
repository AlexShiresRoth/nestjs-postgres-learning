import { Injectable } from '@nestjs/common';
import { Friend } from 'src/interfaces/friend.interface';

@Injectable()
export class FriendsService {
  private readonly friends: Friend[] = [];

  createFriend(friend: Friend) {
    this.friends.push(friend);
  }

  getAllFriends(): Friend[] {
    return this.friends;
  }
}
