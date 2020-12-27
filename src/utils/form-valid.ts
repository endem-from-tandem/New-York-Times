interface Iform{
    name:string,
    lastName:string,
    password:string
}

interface IvalidAnswer{
    value:boolean,
    message:string
}

function formValid(form:Iform):IvalidAnswer{
    const {name, lastName, password} = form
    const answer:IvalidAnswer = {value:true, message:'valid'}
    if(name.includes(' ')){
        answer.value = false
        answer.message = 'Name must not exclude space symbols'
    }
    if(name.length < 4 || name.length > 14){
        answer.value = false
        answer.message = 'Name must have length > 4 and < 14 symbols'
    }
    if(lastName.includes(' ')){
        answer.value = false
        answer.message = 'Last Name must not exclude space symbols'
    }
    if(lastName.length < 4 || lastName.length > 14){
        answer.value = false
        answer.message = 'Last Name must have length > 4 and < 14 symbols'
    }
    if(password.length >20){
        answer.value = false
        answer.message = 'password must be > 20 symbols'
    }

    return answer
  
}

export default formValid