import request from "@/utils/request";
import { AxiosPromise } from "axios";
import { OrderQuery, RolePageResult } from "@/api/order/types";

/**
 * 获取角色分页数据
 *
 * @param queryParams
 */
export function getUserPage(
  queryParams?: OrderQuery
): AxiosPromise<RolePageResult> {
  return request({
    url: "/api/v1/order/page",
    method: "get",
    params: queryParams,
  });
}
