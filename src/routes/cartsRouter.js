import { Router } from 'express';
import { CartsController } from '../controller/cartsController.js';
import {customAuth} from '../middleware/auth.js'
export const router=Router();


router.get('/',customAuth(["public","admin"]),CartsController.getCarts)
router.get('/:cid',customAuth(["public","user","admin"]),CartsController.getCartById)
router.post('/',customAuth(["public","user","admin"]),CartsController.postNewCart)
router.put('/:cid',customAuth(["public","user"]),CartsController.replaceCartContent)
router.put('/:cid/products/:pid',customAuth(["public","user"]),CartsController.updateProductInCart)
router.delete('/:cid',customAuth(["public","user"]), CartsController.deleteAllProductsInCart)
router.delete('/:cid/products/:pid',customAuth(["public","user"]),CartsController.deleteSingleProductInCart )
router.get('/:cid/purchase',CartsController.getPurchaseTicket)
router.post('/:cid/purchase',CartsController.completePurchase)

