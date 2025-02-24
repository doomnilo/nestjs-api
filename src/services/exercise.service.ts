import { Injectable } from '@nestjs/common';

@Injectable()
export class ExerciseService {
  getResult(exerciseId: string, body: any): string {
    console.log('req body: ', body);

    switch (parseInt(exerciseId)) {
      case 1:
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        return this.getTask1(body.phrase);

      default:
        return 'No exercise selected';
    }
  }

  /**
   * Reverse all the separate words in the string
   * @param phrase
   */
  getTask1(phrase: string): string {
    const wordsArr: string[] = phrase.split(' ');
    const revWords: string[] = [];

    for (const word of wordsArr) {
      const revWord: string[] = [];

      for (let i = 0; i < word.length; i++) {
        revWord[i] = word[word.length - i - 1];
      }

      revWords.push(revWord.join(''));
    }

    return revWords.join(' ');
  }
}
