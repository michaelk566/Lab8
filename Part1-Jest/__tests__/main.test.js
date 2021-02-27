const formatVolumeIconPath = require('../assets/scripts/main');
describe('Volume Icon Path', ()=>{
    test('Greater than 66', ()=>{
        expect(formatVolumeIconPath(100)).toContain('3');
        expect(formatVolumeIconPath(80)).toContain('3');
        expect(formatVolumeIconPath(67)).toContain('3');
    })
    test('Greater than 33 and less than 67', ()=>{
        expect(formatVolumeIconPath(66)).toContain('2');
        expect(formatVolumeIconPath(40)).toContain('2');
        expect(formatVolumeIconPath(34)).toContain('2');
    })
    test('Greater than 0 and less than 34', ()=>{
        expect(formatVolumeIconPath(33)).toContain('1');
        expect(formatVolumeIconPath(15)).toContain('1');
        expect(formatVolumeIconPath(1)).toContain('1');
    })
    test('Equal to 0', ()=>{
        expect(formatVolumeIconPath(0)).toContain('0');
    })
})