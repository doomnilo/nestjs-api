import { Injectable } from '@nestjs/common';

@Injectable()
export class ExerciseService {
  getResult(exerciseId: string): string {
    return `result of exercise ${exerciseId}`;
  }
}
