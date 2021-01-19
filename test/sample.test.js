describe('addition', () => {
    beforeEach(() => {
        console.log('before each')
      });      
      afterEach(() => {
        console.log('after each')
      });


      beforeAll(() => {
        console.log('before all')
      });      
      afterAll(() => {
        console.log('after all')
      });

    it('number equality', () => {
        expect(2).toBe(2)
    })
    it('object equality', () => {
        expect({name: 'arun'}).toEqual({name: 'arun'})
    })

})