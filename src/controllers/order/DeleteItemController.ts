import { Request, Response } from "express";
import { DeleteItemService } from "../../services/order/DeleteItemService";

class DeleteItemController {
    async handle(req: Request, res: Response) {
        const id = req.query.id as string;
        const deleteItemService = new DeleteItemService();
        const item = await deleteItemService.execute({id});
        return res.json(item);
    }   
}

export { DeleteItemController }