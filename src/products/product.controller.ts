import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductService } from "./product.service";

@Controller('products')
export class ProductController{
    constructor(private readonly productService: ProductService) {}

    @Get()
    async getAllProducts() {
        return this.productService.findAll();
    }

    @Post()
    async createProduct(@Body() body: any){
        const {name,description, quanlity,color } = body;
        const newProduct = {name,description, quanlity,color};
        await this.productService.create(newProduct);
        return newProduct;
    }

    @Get(':id')
    async getProduct(@Param('id') id: number){
        const product = await this.productService.findOne(id);
        if(!product) return 'product does not exist!'
        return product;
    }
    @Delete(':id')
    async deleteProduct(@Param('id') id: number){
        const product = await this.productService.delete(id);
        return product;
    }

    @Put(':id')
    async updateProduct(@Body() body: any,@Param('id') id: number){
        const {name,description, quanlity,color } = body;
        const updateProduct = {name,description, quanlity,color }
        const product = await this.productService.update(id,updateProduct);
        return product;
    }
}