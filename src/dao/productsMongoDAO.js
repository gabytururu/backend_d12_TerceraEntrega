import { productsModel } from "./models/productsModel.js";

export class ProductsMongoDAO {

    //async getProducts(query,{limit, pagina, sort}){ 
    async getAll(query,{limit, pagina, sort}){ 
        return await productsModel.paginate(query,{
            page:pagina,
            limit,
            sort,
            lean:true
        })
    }

    // async getProductById(id){   
    //     return await productsModel.findById(id).lean()
    // }

    //async getProductByFilter(propFilter){
    async getOneBy(propFilter){
        return await productsModel.findOne(propFilter).lean()
    }

    //async addProduct(productObj){              
    async create(productObj){              
        return await productsModel.create(productObj)
    }

    //async updateProduct(id, propsToUpdate){
    async update(id, propsToUpdate){
        return await productsModel.findByIdAndUpdate(id, propsToUpdate,{runValidators:true, returnDocument:'after'})
    }

    //async deleteProduct(id){
    async delete(id){
        return await productsModel.findByIdAndDelete(id)
    }
}