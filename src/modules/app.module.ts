import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { ExercisesController as ExercisesController } from 'src/controllers/exercise.controller';

@Module({
  imports: [],
  controllers: [AppController, ExercisesController],
  providers: [AppService],
})
export class AppModule {}
