import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Product extends Model {
  @Column
  productId: string;  
  @Column
  name: string;

  @Column
  quanlity: number;

  @Column
  color: string;
  @Column
  description: string;
}