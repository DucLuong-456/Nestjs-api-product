import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

let listProduct =[
    {
        productId: 'pr01',
        name: 'Máy tính'
    },
    {
        productId: 'pr02',
        name: 'Điện thoại'
    },
    {
        productId: 'pr03',
        name: 'Tivi'
    },
    {
        productId: 'pr04',
        name: 'Tủ lạnh'
    }
]
@Controller('products')
export class ProductController{
    private products = [];

    @Get()
    getAllProducts(){
        return this.products;
    }

    @Post()
    createProduct(@Body() body: any){
        const {productId, name} = body;
        const newProduct = {productId, name};
        this.products.push(newProduct);
        return newProduct;
    }

    @Get(':id')
    getProduct(@Param('id') id: string){
        const product = this.products.filter(product => product.productId === id)
        if(!product) return 'product does not exist!'
        return product;
    }
    @Delete(':id')
    deleteProduct(@Param('id') id: string){

    }

    @Put(':id')
    updateProduct(@Param('id') id: string){
        
    }
}