import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
    constructor(
        private configService: ConfigService,
        private playersService: PlayersService
    ) { }

    @Get()
    getPlayers() {
        const environment = this.configService.get<string>('NODE_ENV');
        console.log('environment :>> ', environment);
        return this.playersService.getPlayers();
    }
}
