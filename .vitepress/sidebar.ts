import { DefaultTheme } from "vitepress";

// 侧边栏大纲
export function sidebarTOC(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "快速入门",
            collapsed: false,
            link: "/zh_CN/get-started/",
            items: sidebarGetStarted(),
        },
        {
            text: "API 参考",
            collapsed: false,
            link: "/zh_CN/api-reference/",
            items: sidebarAPIReference(),
        },
        {
            text: "深入了解",
            collapsed: false,
            link: "/zh_CN/insight/",
            items: sidebarInsight(),
        },
        {
            text: "贡献指南",
            collapsed: false,
            link: "/zh_CN/contribute/",
            items: sidebarContribute(),
        },
    ];
}

/* 快速入门 */
function sidebarGetStarted(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "选择一个平台开始",
            collapsed: true,
            items: [
                {
                    text: "从 ws63 开始",
                    link: "/zh_CN/get-started/starting_with_ws63",
                },
                {
                    text: "从 esp32 开始",
                    link: "/zh_CN/get-started/starting_with_esp32",
                },
            ],
        },
        {
            text: "实用技巧",
            link: "/zh_CN/get-started/practical_tips",
        },
        {
            text: "工程相关",
            link: "/zh_CN/get-started/project/",
            collapsed: true,
            items: [
                {
                    text: "新建工程与添加用户组件",
                    link: "/zh_CN/get-started/project/new_project_and_user_component",
                },
                {
                    text: "安装组件",
                    link: "/zh_CN/get-started/project/install_external_components",
                },
            ],
        },
    ];
}

/* API 参考 */
function sidebarAPIReference(): DefaultTheme.SidebarItem[] {
    return [
        /* TODO  */
        {
            text: 'API 参考',
            link: '/xfapidocs/',
            base: 'http://coral-zone.cc',
            target: '_blank',
        },
    ];
}

/* 深入了解 */
function sidebarInsight(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "xfusion 文件夹结构",
            link: "/zh_CN/insight/xfusion_structure",
        },
        {
            text: "xfusion 构建流程",
            link: "/zh_CN/insight/xfusion_build_process",
        },
        {
            text: "xfusion 运行流程",
            link: "/zh_CN/insight/xfusion_run_process",
        },
        {
            text: "组件开发指南",
            link: "/zh_CN/insight/component_development_guide",
        },
        {
            text: "移植指南",
            link: "/zh_CN/insight/porting/",
            collapsed: true,
            items: [
                {
                    text: "平台移植示例",
                    link: "/zh_CN/insight/porting/porting_new_platform_support",
                },
                {
                    text: "组件移植示例",
                    link: "/zh_CN/insight/porting/porting_component_support",
                },
                {
                    text: "构建对接",
                    link: "/zh_CN/insight/porting/porting_xfusion_build",
                },
                {
                    text: "外设对接（XF_HAL）",
                    link: "/zh_CN/insight/porting/porting_xfusion_hal",
                },
            ],
        },
    ];
}

/* 贡献指南 */
function sidebarContribute(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "代码注释指南",
            link: "/zh_CN/contribute/code_comment_guide",
        },
        {
            text: "编码风格指南",
            link: "/zh_CN/contribute/coding_style_guide",
        },
        {
            text: "文档编写指南",
            link: "/zh_CN/contribute/documentation_guide",
        },
        {
            text: "Pull Request 提交步骤",
            link: "/zh_CN/contribute/pull_request_process",
        },
    ];
}
