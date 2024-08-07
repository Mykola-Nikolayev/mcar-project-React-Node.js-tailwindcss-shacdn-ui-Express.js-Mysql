import { type Request, type Response } from 'express'
import { CategoryModel } from '../models/category.model'
import { messageController } from '.';

export class CategoryComtroller {
    async findById(res: Response, req: Request) {
        try {
            const { categoryId } = req.params;

            const category = await CategoryModel.findById(categoryId);

            if(!category) {
                res.status(404).send('Category not found')
                return;
            }

            res.status(201).send(category)
        } catch(error: any) {
            console.log(error)
            res.status(500).send({error: error.message});
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { name, description, image } = req.body;

            const category = await CategoryModel.create({ name, description, image });
            
            res.status(201).send(category)
        } catch(error: any) {
            console.log(error)
            res.status(500).send({error: error.message});
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { categoryId } = req.params;
            const { name, description, image } = req.body;

            if(!name || !description || !image) {
                res.status(400).send({
                    message: "missing data"
                })
            }

            const updatedCategory = await CategoryModel.findByIdAndUpdate(categoryId, {
                name,
                description,
                image,
            })

            if(!updatedCategory) {
                res.status(404).send('category not found')
                return;
            }

            res.status(201).send(updatedCategory)
        } catch(error: any) {
            console.log(error)
            res.status(500).send({error: error.message})
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { categoryId } = req.params;

            const deleteResult = await CategoryModel.delete(categoryId);

            if(!deleteResult) {
                res.status(404).send('Category not found');
                return;
            }

            res.status(200).send({
                message: 'category deleted'
            });
        } catch(error: any) {
            console.error(error);
            res.status(500).send({error: error.message});
        }
    }
}
