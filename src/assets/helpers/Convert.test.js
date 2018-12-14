import Convert from './Convert';

it("convert hex to rgb",()=>{
    const _rgb = Convert.HexToRgb('#4272b8');
    console.log(_rgb.join(','));
})

it("convert hex to rgba",()=>{
    const _rgb = Convert.HexToRgb('#4272b8',14);
    console.log(_rgb);
})