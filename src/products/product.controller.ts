import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ExceptionsHandler } from "@nestjs/core/exceptions/exceptions-handler";
import { NotFoundError } from "rxjs";

@Controller('products')
export class ProductController{
    constructor(private readonly productService: ProductService) {}

    @Get()
    async getAllProducts() {
        try {
            return this.productService.findAll();
        } catch (error) {
            throw new NotFoundException();
        }
    }

    @Post()
    async createProduct(@Body() body: any){
        try {
            const {name,description, quanlity,color } = body;
            if(!name || !description || !quanlity || !color) throw new Error('field is empty!')
            const newProduct = {name,description, quanlity,color};
            await this.productService.create(newProduct);
            return newProduct;
        } catch (error) {
            return error.message
        }
        
    }

    @Get(':id')
    async getProduct(@Param('id') id: number){
        try {
            return await this.productService.findOne(id);
        } catch (error) {
            return error.message
        }
        
    }
    @Delete(':id')
    async deleteProduct(@Param('id') id: number){
        try {
            const product = await this.productService.delete(id);
            return product;
        } catch (error) {
            return error.message
        }
        
    }

    @Put(':id')
    async updateProduct(@Body() body: any,@Param('id') id: number){
        try {
            const {name,description, quanlity,color } = body;
            const updateProduct = {name,description, quanlity,color }
            const product = await this.productService.update(id,updateProduct);
            return product;
        } catch (error) {
            return error.message
        }
        
    }
}