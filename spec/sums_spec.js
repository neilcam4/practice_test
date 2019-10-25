describe('sums spec', function(){
    
    it('should add 2 + 2 and return 4', function(){
        let string = '1 + 1';
        let result = sumsCalc(string)
        expect(result).toEqual('1 + 1 = 2')
    })
    it('should add 3 + 3 and return 6', function(){
        let string = '3 + 3';
        let result = sumsCalc(string)
        expect(result).toEqual('3 + 3 = 6')
    })

    it('should add 23 + 53 and return 76', function(){
        let string = '23 + 53';
        let result = sumsCalc(string)
        expect(result).toEqual('23 + 53 = 76')
    })
    it('should subtract 8 - 5 and return 3 ', function(){
        let string = '8 - 5';
        let result = sumsCalc(string)
        expect(result).toEqual('8 - 5 = 3')
    })
    it('should subtract 28 - 15 and return 13 ', function(){
        let string = '28 - 15';
        let result = sumsCalc(string)
        expect(result).toEqual('28 - 15 = 13')
    })
    it('should multiply 2 and 5 and return 10 ', function(){
        let string = '2 x 5';
        let result = sumsCalc(string)
        expect(result).toEqual('2 x 5 = 10')
    })
    it('should multiply 30 and 20 and return 600 ', function(){
        let string = '30 x 20';
        let result = sumsCalc(string)
        expect(result).toEqual('30 x 20 = 600')
    })
    it('should divide 6 by 2 and return 3', function(){
        let string = '6 / 2';
        let result = sumsCalc(string)
        expect(result).toEqual('6 / 2 = 3')
    })
    it('if string is 1 + 2, 3 + 4 should return 1 + 2 = 3, 3 + 4 = 7', function(){
        let string = '1 + 2,3 + 4';
        let result = sumsCalc(string)
        expect(result).toEqual( [ '1 + 2 = 3', '3 + 4 = 7' ] )
    })
    it('if string is 11 + 22, 33 + 44 should return 11 + 22 = 33, 33 + 44 = 77', function(){
        let string = '11 + 22,33 + 44';
        let result = sumsCalc(string)
        expect(result).toEqual( [ '11 + 22 = 33', '33 + 44 = 77' ] )
    })
})