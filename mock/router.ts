import { MockMethod } from "vite-plugin-mock";
const url = "/api/v1/menus/routes";
const method = "get";
const data = {
  code: "00000",
  data: [
    {
      path: "/system",
      component: "Layout",
      redirect: "/system/user",
      name: "/system",
      meta: {
        title: "系统管理",
        icon: "system",
        hidden: false,
        roles: ["ADMIN"],
      },
      children: [
        {
          path: "user",
          component: "system/user/index",
          name: "User",
          meta: {
            title: "用户管理",
            icon: "user",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true,
          },
        },
        {
          path: "role",
          component: "system/role/index",
          name: "Role",
          meta: {
            title: "角色管理",
            icon: "role",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true,
          },
        },
        {
          path: "menu",
          component: "system/menu/index",
          name: "Menu",
          meta: {
            title: "菜单管理",
            icon: "menu",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true,
          },
        },
        {
          path: "dept",
          component: "system/dept/index",
          name: "Dept",
          meta: {
            title: "部门管理",
            icon: "tree",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true,
          },
        },
        {
          path: "dict",
          component: "system/dict/index",
          name: "Dict",
          meta: {
            title: "字典管理",
            icon: "dict",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true,
          },
        },
      ],
    },
    {
      path: "/api",
      component: "Layout",
      name: "/api",
      meta: {
        title: "接口文档",
        icon: "api",
        hidden: false,
        roles: ["ADMIN"],
        alwaysShow: true,
      },
      children: [
        {
          path: "apifox",
          component: "demo/api/apifox",
          name: "Apifox",
          meta: {
            title: "Apifox",
            icon: "api",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true,
          },
        },
        {
          path: "swagger",
          component: "demo/api/swagger",
          name: "Swagger",
          meta: {
            title: "Swagger",
            icon: "api",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true,
          },
        },
        {
          path: "knife4j",
          component: "demo/api/knife4j",
          name: "Knife4j",
          meta: {
            title: "Knife4j",
            icon: "api",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true,
          },
        },
      ],
    },
    {
      path: "/doc",
      component: "Layout",
      name: "/doc",
      meta: {
        title: "平台文档",
        icon: "document",
        hidden: false,
        roles: ["ADMIN"],
      },
      children: [
        {
          path: "internal-doc",
          component: "demo/internal-doc",
          name: "InternalDoc",
          meta: {
            title: "平台文档(内嵌)",
            icon: "document",
            hidden: false,
            roles: ["ADMIN"],
          },
        },
        {
          path: "https://juejin.cn/post/7228990409909108793",
          name: "Https://juejin.cn/post/7228990409909108793",
          meta: {
            title: "平台文档(外链)",
            icon: "link",
            hidden: false,
            roles: ["ADMIN"],
          },
        },
      ],
    },
    {
      path: "/multi-level",
      component: "Layout",
      redirect: "/multi-level/multi-level1",
      name: "/multiLevel",
      meta: {
        title: "多级菜单",
        icon: "cascader",
        hidden: false,
        roles: ["ADMIN"],
      },
      children: [
        {
          path: "multi-level1",
          component: "demo/multi-level/level1",
          redirect: "/multi-level/multi-level2",
          name: "MultiLevel1",
          meta: {
            title: "菜单一级",
            icon: "",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true,
          },
          children: [
            {
              path: "multi-level2",
              component: "demo/multi-level/children/level2",
              redirect: "/multi-level/multi-level2/multi-level3-1",
              name: "MultiLevel2",
              meta: {
                title: "菜单二级",
                icon: "",
                hidden: false,
                roles: ["ADMIN"],
                keepAlive: true,
              },
              children: [
                {
                  path: "multi-level3-1",
                  component: "demo/multi-level/children/children/level3-1",
                  name: "MultiLevel31",
                  meta: {
                    title: "菜单三级-1",
                    icon: "",
                    hidden: false,
                    roles: ["ADMIN"],
                    keepAlive: true,
                  },
                },
                {
                  path: "multi-level3-2",
                  component: "demo/multi-level/children/children/level3-2",
                  name: "MultiLevel32",
                  meta: {
                    title: "菜单三级-2",
                    icon: "",
                    hidden: false,
                    roles: ["ADMIN"],
                    keepAlive: true,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      path: "/table",
      component: "Layout",
      name: "/table",
      meta: {
        title: "Table",
        icon: "table",
        hidden: true,
        roles: ["ADMIN"],
      },
      children: [
        {
          path: "dynamic-table",
          component: "table/dynamic-table/index",
          name: "DynamicTable",
          meta: {
            title: "动态Table",
            icon: "",
            hidden: true,
            roles: ["ADMIN"],
            keepAlive: true,
          },
        },
        {
          path: "drag-table",
          component: "table/drag-table",
          name: "DragTable",
          meta: {
            title: "拖拽Table",
            icon: "",
            hidden: true,
            roles: ["ADMIN"],
            keepAlive: true,
          },
        },
        {
          path: "complex-table",
          component: "table/complex-table",
          name: "ComplexTable",
          meta: {
            title: "综合Table",
            icon: "",
            hidden: true,
            roles: ["ADMIN"],
            keepAlive: true,
          },
        },
      ],
    },
    {
      path: "/component",
      component: "Layout",
      name: "/component",
      meta: {
        title: "组件封装",
        icon: "menu",
        hidden: false,
        roles: ["ADMIN"],
      },
      children: [
        {
          path: "wang-editor",
          component: "demo/wang-editor",
          name: "WangEditor",
          meta: {
            title: "富文本编辑器",
            icon: "",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true,
          },
        },
        {
          path: "upload",
          component: "demo/upload",
          name: "Upload",
          meta: {
            title: "图片上传",
            icon: "",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true,
          },
        },
        {
          path: "icon-selector",
          component: "demo/icon-selector",
          name: "IconSelector",
          meta: {
            title: "图标选择器",
            icon: "",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true,
          },
        },
        {
          path: "dict-demo",
          component: "demo/dict",
          name: "DictDemo",
          meta: {
            title: "字典组件",
            icon: "",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true,
          },
        },
        {
          path: "signature",
          component: "demo/signature",
          name: "Signature",
          meta: {
            title: "签名",
            icon: "",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true,
          },
        },
        {
          path: "table",
          component: "demo/table",
          name: "Table",
          meta: {
            title: "表格",
            icon: "",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true,
          },
        },
      ],
    },
    {
      path: "/function",
      component: "Layout",
      meta: {
        title: "功能演示",
        icon: "menu",
        hidden: false,
        roles: ["ADMIN"],
        keepAlive: true,
      },
      children: [
        {
          path: "permission",
          component: "demo/permission/page",
          name: "Permission",
          meta: {
            title: "Permission",
            icon: "",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true,
          },
        },
        {
          path: "icon-demo",
          component: "demo/icons",
          name: "Icons",
          meta: {
            title: "图标",
            icon: "",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true,
          },
        },
        {
          path: "websocket",
          component: "demo/websocket",
          name: "Websocket",
          meta: {
            title: "Websocket",
            icon: "",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true,
          },
        },
        {
          path: "other",
          component: "demo/other",
          meta: {
            title: "敬请期待...",
            icon: "",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true,
          },
        },
      ],
    },
    {
      path: "/order",
      component: "Layout",
      redirect: "/order/userorder",
      meta: {
        title: "订单系统",
        icon: "system",
        hidden: false,
        roles: ["ADMIN"],
        keepAlive: true,
      },
      children: [
        {
          path: "userorder",
          component: "order/user/index",
          name: "Userorder",
          meta: {
            title: "用户订单",
            icon: "user",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true,
          },
        },
        {
          path: "mgrorder",
          component: "order/mgr/index",
          name: "mgrorder",
          meta: {
            title: "管理员订单",
            icon: "user",
            hidden: false,
            roles: ["ADMIN"],
            keepAlive: true,
          },
        },
      ],
    },
  ],

  msg: "一切ok",
};

export default [
  {
    url: url,
    method: method,
    response: () => {
      return data;
    },
  },
] as MockMethod[];
