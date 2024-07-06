import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayersModule } from './players/players.module';
import { ConfigModule } from '@nestjs/config';
import { OpenAiModule } from './open-ai/open-ai.module';


@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PlayersModule, OpenAiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
