//TypeSript

type User = {
    name:string,
    email:string,
    address:{
        city:string,
        state?:string
    }
}

function showUser(param:User){
    return `Welcome ${user.name} your email ${user.email} your city ${user.city} your state ${user.state}`;
}

const result =  showUser('queijo')