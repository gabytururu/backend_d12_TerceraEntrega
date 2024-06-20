import { Router } from 'express';
import { CartsController } from '../controller/cartsController.js';
import {customAuth} from '../middleware/auth.js'
export const router=Router();


router.get('/',customAuth(["admin"]),CartsController.getCarts)
router.get('/:cid',customAuth(["user","admin"]),CartsController.getCartById)
router.post('/',customAuth(["user","admin"]),CartsController.postNewCart)
router.put('/:cid',customAuth(["user"]),CartsController.replaceCartContent)
router.put('/:cid/products/:pid',customAuth(["user"]),CartsController.updateProductInCart)
router.delete('/:cid',customAuth(["user"]), CartsController.emptyCartContent)
router.delete('/:cid/products/:pid',customAuth(["user"]),CartsController.deleteProductInCart )

