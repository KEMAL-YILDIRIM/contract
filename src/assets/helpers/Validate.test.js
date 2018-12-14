import Validate from "./Validate";


it('is system color', ()=>{
    const isValid = Validate.Color('success')
    ? true
    :false;

    console.log(isValid);
})