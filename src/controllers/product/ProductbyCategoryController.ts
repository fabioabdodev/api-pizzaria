import {Request, Response} from 'express'
import { ProductbyCategoryService } from '../../services/product/ProductbyCategoryService'

class ProductbyCategoryController{
  async handle(req: Request, res: Response){
    const category_id = req.query.category_id as string;

    const listByCategory = new ProductbyCategoryService();

    const products = await listByCategory.execute({
      category_id
    });

    return res.json(products);

  }
}

export {ProductbyCategoryController}