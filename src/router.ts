import { Router} from "express";
import multer from "multer";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthetication } from "./midlewares/isAuthetication";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ProductbyCategoryController } from "./controllers/product/ProductbyCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import uploadConfig from "./config/multer";
import { DeleteOrderController } from "./controllers/order/DeleteOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { DeleteItemController } from "./controllers/order/DeleteItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrderController } from "./controllers/order/ListOrderController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";


const router = Router();

//const upload = multer(uploadConfig.upload("./tmp"))


// rotas users ---

router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthetication, new DetailUserController().handle);

//rotas categories ---

router.post("/category", isAuthetication, new CreateCategoryController().handle);
router.get("/allcategories", isAuthetication, new ListCategoryController().handle);

//rotas Products --
router.post("/products", isAuthetication, new CreateProductController().handle);
//router.post("/products", isAuthetication, upload.single("file"), new CreateProductController().handle);
router.get("/products/category", isAuthetication, new ProductbyCategoryController().handle);

// rotas order --
router.post("/order", isAuthetication, new CreateOrderController().handle);
router.post("/order/add", isAuthetication, new AddItemController().handle);
router.put("/order/send", isAuthetication, new SendOrderController().handle);
router.delete("/order", isAuthetication, new DeleteOrderController().handle);
router.delete("/order/remove", isAuthetication, new DeleteItemController().handle);
router.get("/orders", isAuthetication, new ListOrderController().handle);
router.get("/order/detail", isAuthetication, new DetailOrderController().handle);
router.put("/order/finish", isAuthetication, new FinishOrderController().handle);

export { router };