<script setup lang="ts">
import { RolePageVO, RoleForm, RoleQuery } from "@/api/role/types";

import { UserQuery } from "@/api/user/types";
const queryFormRef = ref(ElForm);
const queryParams = reactive<UserQuery>({
  pageNum: 1,
  pageSize: 10,
});
const loading = ref(false);
const orderData = ref([
  {
    orderId: 1,
    creater: "13900000001",
    status: "1",
    creatTime: "2023-22-00 14:00:00",
  },
  {
    orderId: 2,
    creater: "13900000002",
    status: "2",
    creatTime: "2023-22-00 14:00:00",
  },
  {
    orderId: 3,
    creater: "13900000003",
    status: "3",
    creatTime: "2023-22-00 14:00:00",
  },
  {
    orderId: 4,
    creater: "13900000004",
    status: "4",
    creatTime: "2023-22-00 14:00:00",
  },
]);
const dateTimeRange = ref("");
watch(dateTimeRange, (newVal) => {
  if (newVal) {
    queryParams.startTime = newVal[0];
    queryParams.endTime = newVal[1];
  }
});
// 禁止选择此刻之后的时间
const disabledDate = (time: Date) => {
  return time.getTime() > Date.now();
};
function handleQuery() {}
function openDialog() {}
</script>

<template>
  <div class="app-container">
    <div class="search-container">
      <el-form ref="queryFormRef" :model="queryParams" :inline="true">
        <el-form-item label="关键字" prop="keywords">
          <el-input
            v-model="queryParams.keywords"
            placeholder="Please input"
            clearable
            style="width: 200px"
            @keyup.enter="handleQuery"
          />
        </el-form-item>
        <el-form-item label="订单状态" prop="status">
          <el-select
            v-model="queryParams.status"
            placeholder="全部"
            clearable
            class="!w-[100px]"
          >
            <el-option label="待付款" value="0" />
            <el-option label="已付款" value="1" />
            <el-option label="已取消" value="2" />
            <el-option label="已结束" value="3" />
          </el-select>
        </el-form-item>
        <el-form-item label="订单时间">
          <el-date-picker
            class="!w-[360px]"
            v-model="dateTimeRange"
            type="datetimerange"
            clearable
            range-separator="~"
            start-placeholder="开始时间"
            end-placeholder="截止时间"
            value-format="YYYY-MM-DD-HH:mm:ss"
            :disabled-date="disabledDate"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleQuery">
            <i-ep-search />
            搜索</el-button
          >
          <el-button>
            <i-ep-refresh />
            重置</el-button
          >
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="openDialog()"
            ><i-ep-plus />创建订单</el-button
          >
        </el-form-item>
      </el-form>
      <el-table
        ref="dataTableRef"
        v-loading="loading"
        :data="orderData"
        highlight-current-row
        border
      >
        <el-table-column
          property="orderId"
          label="订单ID"
          width="120"
          align="center"
        />
        <el-table-column
          property="creater"
          label="用户"
          width="120"
          align="center"
        />
        <el-table-column
          property="status"
          label="订单状态"
          width="120"
          align="center"
        />
        <el-table-column property="creatTime" label="创建时间" align="center" />
        <el-table-column fixed="right" label="操作" width="220">
          <template #default="">
            <el-button type="primary" size="small" link @click="1">
              <i-ep-position />修改
            </el-button>
            <el-button type="primary" size="small" link @click="1">
              <i-ep-edit />编辑
            </el-button>
            <el-button type="primary" size="small" link @click="1">
              <i-ep-delete />删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
