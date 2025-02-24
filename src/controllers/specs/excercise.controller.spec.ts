import { ExerciseService } from '../../services/exercise.service';

describe('TestController', () => {
  let service: ExerciseService;

  beforeEach(() => {
    service = new ExerciseService();
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(service.getTask1('I love this white rabbit')).toBe('I evol siht etihw tibbar');
    });
  });
});
