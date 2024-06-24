const addProdToCart= async(_id, title)=>{
    console.log(`El código a comprar es ${_id} en el carrito`)
    const cid = document.querySelector('#userCart').dataset.userCid
    console.log('el carrito de este user es: ',cid)

    const response = await fetch(`/api/carts/${cid}/products/${_id}`,{
        method:"PUT"
    })

    if(response.status===200){
        let payloadData = await response.json()
        console.log('la payload data:',payloadData)        
        Swal.fire({
            text: `El producto id#${_id} fue agregado a tu carrito ${cid}`,
            toast: true,
            position: "center"
        })
    }   
}


const checkProductDetails=(_id)=>{
    console.log(`ver detalles del producto con id#${_id} `)
    window.location.href = `/products/${_id}`
}

const finalizePurchase = async(_id) =>{
    const cid = document.querySelector(".buyButton").dataset.userCid

    const response = await fetch(`/api/carts/${cid}/products/${_id}`,{
        method:"PUT"
    })

    if(response.status===200){
        let payloadData = await response.json()
        console.log('la payloadData: ',payloadData)
        Swal.fire({
            text: `El producto id#${_id} fue agregado al carrito ${cid}`,
            toast: true,
            position: "center"
        })
    }  
}

//primer bosquejo.. ervisar dataset.ticketdetails si asi debe ser o diferente.. revisar tmb de donde voy a jalar cid si eso no lo estoy enviando en ticket details so far... pero debiera ser pq es parte del populate que me falta vincular 
const finalizarCompra = async(ticketDetails)=>{
    const ticketDetails = document.querySelector(".finalPurchaseButton").dataset.ticketDetails //checar syntaxis 

    const response = await fetch(`/api/carts/${cid}/purchase`,{
        method:"POST"
    })

    if (response.status===200){
        let payloadData = await response.json()
        console.log('la payload data de final pruchase',payloadData)
        // Swal.fire({
        //     text: `Listo compra finalizada - revise su ticket de compra para ver detalles`,
        //     toast: true,
        //     position: "center"
        // })
    }
    //hacer todo y al final esto? para enviar a los ticket details para cerrar/acabar funcion?=
     //window.location.href = `/purchase/${ticketid}` //pero ojo de donde saco ticket id ??? si apenas se esta creando ?? osea como logro hacer el get si eso no es parte del payload que se recibe como resultado de la creacion? AH NOO SI ES .. pero como accedo a esto si es parte del objeto payload?? creo que si viene con el payload .. entonces pues solo usar el payload object no?? revisar.. testear hasta payload data console log y revisar como se pasa al front.. y si en payloda data si vienen estos datos entonces ya la hice porque puedo enviar directo al endpoint del ticket sin pedos.. .creo... y a la vez debo poder remitirle (pasarle por props? esta misma payload data al handlebar view para que la use para hacer el display de esta data)


    //OJO Recuerda que aparte de esto tambien hace falta la parte del POPULATE!!! QUIZA HACE MAS ENTIDO ACABAR PRIEMERO ESO??? 
}