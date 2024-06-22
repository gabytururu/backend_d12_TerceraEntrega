import mongoose from "mongoose";

const ticketsCollection = 'tickets'

const ticketsSchema = new mongoose.Schema(
    {
        code:String, //autogenerarse y ser unico
        amount: Number, //total de la compra
        // purchaser: {
        //     type: mongoose.Types.ObjectId,
        //     ref: "users"
        // },
        purchaser: String,
        productsPurchased: Array,
        productsLeftInCart:Array
    },
    {timestamps:true,strict: true}
)

export const ticketsModel = mongoose.model(
    ticketsCollection,
    ticketsSchema
)