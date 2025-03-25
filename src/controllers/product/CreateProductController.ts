import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService"
import { UploadedFile } from "express-fileupload"
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})

class CreateProductController {
    async handle(request: Request, response: Response) {
        const { name, price, description, banner, category_id } = request.body;
        const product = new CreateProductService();

        if (!request.files || Object.keys(request.files).length === 0) {
            throw new Error("No files were uploaded.");
        } else {

            const file: UploadedFile = request.files["file"]

            const resultfile: UploadApiResponse = await new Promise((resolve, reject) => {
                cloudinary.uploader.upload_stream({}, function (error, result) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                }).end(file.data);
            })

            if (!resultfile) {
                throw new Error("Error uploading file");
            }

           const menu = await product.execute({ name, price, description, banner: resultfile.url, category_id });

            return response.json(menu);

        }
    }
}

export { CreateProductController }