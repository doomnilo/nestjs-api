import { Body, Controller, Get, Param } from '@nestjs/common';
import { ExerciseService } from 'src/services/exercise.service';

@Controller('exercise')
export class ExercisesController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Get()
  getTest(): string {
    return 'weeee';
  }

  @Get(':id')
  getExcerciseResult(@Param('id') id: string, @Body() body: any): string {
    return this.exerciseService.getResult(id, body);
  }
}
