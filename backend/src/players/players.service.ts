import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayersService {
    getPlayers() {
        return ['Player 1', 'Player 2'];
    }
}
