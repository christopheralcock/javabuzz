describe('Javabuzz', function() {

  var javabuzz;

  describe('knows when a number is', function() {

    it('divisible by three', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });
  });
});