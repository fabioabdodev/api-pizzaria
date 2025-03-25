import prismaClient from "../../prisma";
import { CreateProductController } from "../../controllers/product/CreateProductController"

interface ProductRequest {
    name: string;
    price: string;
    description: string;
    banner: string;
    category_id: string;
}

class CreateProductService {
    async execute({name, price, description, banner, category_id}: ProductRequest) {
        const product = new CreateProductController();
        const productCreated = await prismaClient.product.create({
            data: {
                name: name,
                price: price,
                description: description,
                banner: banner,
                category_id: category_id
            }           
        })
        return productCreated;
    }
}

export { CreateProductService }