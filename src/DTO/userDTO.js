export class userDTO{
    constructor(user){
        this.fullName = `${user.first_name.toUpperCase()} ${user.last_name.toUpperCase()}`
        this.email = user.email
        this.cart= user.cart
        this.age=user.age
        this.rol=user.rol

        // nombre: currentUser.first_name,
        //     apellido: currentUser.last_name,
        //     edad: currentUser.age,
        //     email: currentUser.email,
        //     rol:currentUser.rol,
        //     carrito:currentUser.cart
    }
}