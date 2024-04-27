export interface ProductProps {
  id: number;
  name: string;
  sku: string;
  category_id: number;
  description: string;
  large_description: string;
  price: string;
  discount_price?: string;
  discount_percent?: number;
  total_price: number;
  is_new: boolean;
  image_link?: string;
  other_images_link?: string[];
}
