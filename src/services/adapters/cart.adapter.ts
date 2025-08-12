import type { ApiResponse } from "../http/ApiRemote"
import { RequestHttp } from "../http/HttpRequest"
import type { Product } from "./products.adapter"

export const getCart = async (): Promise<ApiResponse<Product[]>> => {
  return await RequestHttp(null, {
    base: "cart",
    entry: "get",
    method: "GET"
  })
}

export const addToCart = async (productId: number): Promise<ApiResponse<Product[]>> => {
  return await RequestHttp({ productId }, {
    base: "cart",
    entry: "add",
    method: "POST"
  })
}
