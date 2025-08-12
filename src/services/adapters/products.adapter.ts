import type { ApiResponse } from "../http/ApiRemote"
import { RequestHttp } from "../http/HttpRequest"

export interface Product {
  id: number
  name: string
  price: number
}

export const getAllProducts = async (): Promise<ApiResponse<Product[]>> => {
  return await RequestHttp(null, {
    base: "products",
    entry: "getAll",
    method: "GET"
  })
}
