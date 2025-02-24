import { Injectable } from '@nestjs/common';

@Injectable()
export class ExerciseService {
  getResult(exerciseId: string, body: any): string {
    console.log('req body: ', body);

    return `result of exercise ${exerciseId}`;
  }
}
