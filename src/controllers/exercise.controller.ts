import { Controller, Get, Param } from '@nestjs/common';

@Controller('exercise')
export class ExercisesController {
  @Get()
  getTest(): string {
    return 'weeee';
  }

  @Get(':id')
  getExcerciseResult(@Param('id') id: string): string {
    return `result ${id}`;
  }
}
