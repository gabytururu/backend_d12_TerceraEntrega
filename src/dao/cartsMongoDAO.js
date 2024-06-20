import { cartsModel } from "./models/cartsModel.js";

export class CartsMongoDAO {
  
    //async getCarts(){
    async getAll(){
        return await cartsModel.find().populate("products.pid").lean()
    }

    //async createCart(){
    async create(){
        let cart = (await cartsModel.create({}))  
        return cart.toJSON() 
    }   

    //async getCartById(id){
    async getById(id){
        return await cartsModel.findById(id).populate("products.pid").lean()
    }

    //creo no se esta usando? testear y ver si crashea
    // async getCartByFilter(propFilter={}){
    //     return await cartsModel.findOne(propFilter).populate("products.pid").lean()
    // }

    //async replaceCart(cid,newCartDetails){
    async replace(cid,newCartDetails){
        return await cartsModel.findByIdAndUpdate(
            cid,
            {$set:{products:newCartDetails}},
            {runValidators:true, returnDocument:'after'}
        )
    }


    //async findProductInCart(cid,pid){
    async findOne(cid,pid){
        return await cartsModel.findOne({ _id: cid, "products.pid": pid }).lean()
    }

    //async updateProductInCartQuantity(cid,pid,qty=1){
    async findOneAndUpdate(cid,pid,qty=1){
        return await cartsModel.findOneAndUpdate(
            {_id:cid, "products.pid":pid},
            {$inc:{"products.$.qty":qty}},
            {runValidators:true,returnDocument:'after'}
        )
        
    }

    //async updateCart(cid,pid){
    async update(cid,pid){
        return await cartsModel.findByIdAndUpdate(
            cid,
            {$push:{products:{pid}}},
            {runValidators:true, returnDocument:'after'}
        )
       
    }

    //async deleteCart(cid,pid={}){ quiza sirva asi para evitar la ultima ruta testear 
    //async deleteCart(cid){
    async delete(cid,pid=null){
        const query = pid !== null? {$pull:{products:{pid}}}:{$pull:{products:{}}}
        return await cartsModel.findByIdAndUpdate(
            cid,
           // {$pull:{products:{}}}, 
            //{$pull:{products:{pid}}},
            query, 
            {runValidators:true, returnDocument:'after'}
        )
    }

    // async deleteProductInCart(cid,pid){
    //     return await cartsModel.findByIdAndUpdate(
    //         cid,
    //         {$pull:{products:{pid}}}, 
    //         {runValidators:true, returnDocument:'after'}
    //     )
    // }
}
 