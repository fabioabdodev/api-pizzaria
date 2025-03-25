"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
const isAuthetication_1 = require("./midlewares/isAuthetication");
const CreateCategoryController_1 = require("./controllers/category/CreateCategoryController");
const ListCategoryController_1 = require("./controllers/category/ListCategoryController");
const CreateProductController_1 = require("./controllers/product/CreateProductController");
const ProductbyCategoryController_1 = require("./controllers/product/ProductbyCategoryController");
const CreateOrderController_1 = require("./controllers/order/CreateOrderController");
const DeleteOrderController_1 = require("./controllers/order/DeleteOrderController");
const AddItemController_1 = require("./controllers/order/AddItemController");
const DeleteItemController_1 = require("./controllers/order/DeleteItemController");
const SendOrderController_1 = require("./controllers/order/SendOrderController");
const ListOrderController_1 = require("./controllers/order/ListOrderController");
const DetailOrderController_1 = require("./controllers/order/DetailOrderController");
const FinishOrderController_1 = require("./controllers/order/FinishOrderController");
const router = (0, express_1.Router)();
exports.router = router;
//const upload = multer(uploadConfig.upload("./tmp"))
// rotas users ---
router.post("/users", new CreateUserController_1.CreateUserController().handle);
router.post("/session", new AuthUserController_1.AuthUserController().handle);
router.get("/me", isAuthetication_1.isAuthetication, new DetailUserController_1.DetailUserController().handle);
//rotas categories ---
router.post("/category", isAuthetication_1.isAuthetication, new CreateCategoryController_1.CreateCategoryController().handle);
router.get("/allcategories", isAuthetication_1.isAuthetication, new ListCategoryController_1.ListCategoryController().handle);
//rotas Products --
router.post("/products", isAuthetication_1.isAuthetication, new CreateProductController_1.CreateProductController().handle);
//router.post("/products", isAuthetication, upload.single("file"), new CreateProductController().handle);
router.get("/products/category", isAuthetication_1.isAuthetication, new ProductbyCategoryController_1.ProductbyCategoryController().handle);
// rotas order --
router.post("/order", isAuthetication_1.isAuthetication, new CreateOrderController_1.CreateOrderController().handle);
router.post("/order/add", isAuthetication_1.isAuthetication, new AddItemController_1.AddItemController().handle);
router.put("/order/send", isAuthetication_1.isAuthetication, new SendOrderController_1.SendOrderController().handle);
router.delete("/order", isAuthetication_1.isAuthetication, new DeleteOrderController_1.DeleteOrderController().handle);
router.delete("/order/remove", isAuthetication_1.isAuthetication, new DeleteItemController_1.DeleteItemController().handle);
router.get("/orders", isAuthetication_1.isAuthetication, new ListOrderController_1.ListOrderController().handle);
router.get("/order/detail", isAuthetication_1.isAuthetication, new DetailOrderController_1.DetailOrderController().handle);
router.put("/order/finish", isAuthetication_1.isAuthetication, new FinishOrderController_1.FinishOrderController().handle);
