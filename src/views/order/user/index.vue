<script setup lang="ts">
// import { RolePageVO, RoleForm, RoleQuery } from "@/api/role/types";
import { useUserStoreHook } from "@/store/modules/user";
import { UserQuery } from "@/api/user/types";
const userStore = useUserStoreHook();
const queryFormRef = ref(ElForm);
const queryParams = reactive<UserQuery>({
  pageNum: 1,
  pageSize: 10,
});
const loading = ref(false);
const total = ref(0);
const orderData = ref([
  {
    orderId: 0,
    creater: "13900000001",
    status: "1",
    creatTime: "2023-22-00 14:00:00",
  },
]);
const dateTimeRange = ref("");
const dialog = reactive<DialogOption>({
  visible: false,
  title: "新增订单",
});
const roleFormRef = ref(ElForm);
interface formDataItem {
  creater: number;
  user: string;
  createTime: Date;
  status: string;
}
const formData: formDataItem = reactive({
  creater: userStore.user.userId as number,
  user: "",
  createTime: new Date(),
  status: "",
});
const rules = reactive({
  user: [
    { required: true, message: "请输入使用人", trigger: "blur" },
    {
      pattern:
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
      message: "格式不正确",
      trigger: "blur",
    },
  ],
  createTime: [{ required: true, message: "请选择创建时间", trigger: "blur" }],
  status: [{ required: true, message: "请选择状态", trigger: "blur" }],
});
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
function handleQuery() {
  loading.value = true;
  setTimeout(() => {
    orderData.value = [
      {
        orderId: 0,
        creater: "13900000001",
        status: "1",
        creatTime: "2023-22-00 14:00:00",
      },
      {
        orderId: 1,
        creater: "13900000002",
        status: "2",
        creatTime: "2023-22-00 14:00:00",
      },
      {
        orderId: 2,
        creater: "13900000003",
        status: "3",
        creatTime: "2023-22-00 14:00:00",
      },
      {
        orderId: 3,
        creater: "13900000004",
        status: "4",
        creatTime: "2023-22-00 14:00:00",
      },
      {
        orderId: 4,
        creater: "13900000001",
        status: "1",
        creatTime: "2023-22-00 14:00:00",
      },
      {
        orderId: 5,
        creater: "13900000002",
        status: "2",
        creatTime: "2023-22-00 14:00:00",
      },
      {
        orderId: 6,
        creater: "13900000003",
        status: "3",
        creatTime: "2023-22-00 14:00:00",
      },
      {
        orderId: 7,
        creater: "13900000004",
        status: "4",
        creatTime: "2023-22-00 14:00:00",
      },
      {
        orderId: 8,
        creater: "13900000001",
        status: "1",
        creatTime: "2023-22-00 14:00:00",
      },
      {
        orderId: 9,
        creater: "13900000002",
        status: "2",
        creatTime: "2023-22-00 14:00:00",
      },
    ];
    total.value = orderData.value.length;
    loading.value = false;
  }, 1000);
}
function handleSubmit() {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    orderData.value.push({
      orderId: orderData.value.length + 1,
      creater: formData.user,
      status: "1",
      creatTime: "2023-22-00 14:00:00",
    });
    closeDialog();
    ElMessage({
      message: "Congrats, this is a success message.",
      type: "success",
    });
    total.value = orderData.value.length;
  }, 500);
}
function openDialog() {
  dialog.visible = true;
}
function closeDialog() {
  dialog.visible = false;
}
onMounted(() => {
  handleQuery();
});
</script>

<template>
  <div class="app-container">
    <div class="search-container">
      <el-form ref="queryFormRef" :model="queryParams" :inline="true">
        <el-form-item label="关键字" prop="keywords">
          <el-input
            v-model="queryParams.keywords"
            placeholder="请输入订单编号"
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
      <!-- 分页 -->
      <pagination
        v-if="1"
        v-model:total="total"
        v-model:page="queryParams.pageNum"
        v-model:limit="queryParams.pageSize"
        @pagination="handleQuery"
      />
      <!-- 新增订单弹窗 -->
      <el-dialog
        v-model="dialog.visible"
        :title="dialog.title"
        width="400px"
        @close="closeDialog"
      >
        <el-form
          ref="roleFormRef"
          :model="formData"
          :rules="rules"
          label-width="100px"
        >
          <el-form-item label="创建者" prop="name">
            <el-input
              v-model="formData.creater"
              placeholder="请输入角色名称"
              :disabled="true"
            />
          </el-form-item>

          <el-form-item label="用户信息" prop="user">
            <el-input v-model="formData.user" placeholder="请输入角色编码" />
          </el-form-item>

          <el-form-item label="订单状态" prop="status">
            <el-radio-group v-model="formData.status">
              <el-radio :label="1">待付款</el-radio>
              <el-radio :label="2">已付款</el-radio>
              <el-radio :label="3">已取消</el-radio>
              <el-radio :label="4">已完成</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="创建时间" prop="createTime">
            <el-date-picker
              v-model="formData.createTime"
              type="datetime"
              placeholder="Select date and time"
              :editable="false"
              style="width: 100%"
            />
          </el-form-item>
        </el-form>

        <template #footer>
          <div class="dialog-footer">
            <el-button type="primary" @click="handleSubmit">确 定</el-button>
            <el-button @click="closeDialog">取 消</el-button>
          </div>
        </template>
      </el-dialog>
    </div>
  </div>
</template>
