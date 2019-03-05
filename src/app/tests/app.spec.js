import app from '../app';

describe('app', () => {

  describe('HomeController', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module(app);

      angular.mock.inject(($controller) => {
        ctrl = $controller('HomeController', {});
      });
    });

    it('should contain the starter url', () => {
      expect(ctrl.name).toBe('World');
    });
  });
});