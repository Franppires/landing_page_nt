import axios from 'axios';

interface ProductData {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice: number;
  image: string;
  installments: {
    count: number;
    value: number;
  };
}


interface ApiResponse {
  nextPage: number;
  products: ProductData[];
}

export async function fetchProducts(page: number): Promise<ApiResponse> {
  try {
    const response = await axios.get<ApiResponse>(
      `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}