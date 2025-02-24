import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { ExercisesController as ExercisesController } from 'src/controllers/exercise.controller';
import { ExerciseService } from 'src/services/exercise.service';

@Module({
  imports: [],
  controllers: [AppController, ExercisesController],
  providers: [AppService, ExerciseService],
})
export class AppModule {}
