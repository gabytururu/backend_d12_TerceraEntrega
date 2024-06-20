import { ProductsMongoDAO as ProductsDAO } from "../dao/productsMongoDAO.js";

class ProductsService{
    constructor(dao){
        this.dao=dao
    }

    getProducts=async(query,{limit,pagina,sort})=>{
        return this.dao.getAll(query,{limit,pagina,sort})
    }

    getProductBy=async(id)=>{
        return this.dao.getOneBy(id)
    }

    postNewProduct=async(productObj)=>{
        return this.dao.create(productObj)
    }

    updateProduct=async(id, propsToUpdate)=>{
        return this.dao.update(id, propsToUpdate)
    }

    deleteProduct=async(id)=>{
        return this.dao.delete(id)
    }
}

export const productsService=new ProductsService(new ProductsDAO())