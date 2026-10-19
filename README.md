# Next.js + shadcn/ui 模板

用于新项目的轻量起点，已安装全部当前 `base-vega` 官方组件及其依赖。

## 技术栈

- Next.js 16 App Router、React 19、TypeScript
- Tailwind CSS 4（使用现有的 `@tailwindcss/turbopack` 配置）
- shadcn/ui：Base UI + Vega，Taupe 配色，Lucide 图标
- 系统字体：开发和构建无需下载 Google Fonts
- 全局 TooltipProvider

## 开始开发

复制本项目作为新项目目录后，修改 `package.json` 中的项目名称，再安装依赖：

```bash
bun install --frozen-lockfile
bun run dev
```

打开 http://localhost:3000，修改 `app/page.tsx` 开始开发。
首次安装依赖仍需网络，或使用已有的 Bun 缓存。组件源码已在项目中，日常使用无需再次运行 shadcn 下载命令。

## 常用命令

```bash
bun run dev        # 本地开发
bun run lint       # ESLint
bun run typecheck  # 生成路由类型并进行 TypeScript 检查
bun run build      # 生产构建
bun run start      # 启动已构建的生产应用
```

## 目录

```text
app/
  page.tsx                 # 首页，默认是 Server Component
  layout.tsx               # 页面元信息、语言和 TooltipProvider
  globals.css              # Tailwind 入口、明暗主题、字体及圆角变量
components/ui/             # 63 个已安装的 shadcn UI 组件文件
hooks/                     # 组件配套 hooks
lib/
  utils.ts                 # cn 样式合并工具
  highlighter.tsx          # 代码高亮工具
public/                    # 静态资源
components.json            # shadcn CLI 配置
next.config.ts             # Next.js 配置
```

## 使用组件

直接按需导入本地文件：

```tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    <main className="mx-auto flex max-w-md gap-3 p-6">
      <Input placeholder="输入内容" aria-label="内容" />
      <Button>继续</Button>
    </main>
  );
}
```

需要 state、事件处理或浏览器 API 的业务组件在文件顶部添加 `"use client"`。
其他组件的组合方式请参考 [shadcn/ui 文档](https://ui.shadcn.com/docs/components)。本项目使用 Base UI，示例应选择对应版本。

## 自定义模板

- **站点名称与语言**：修改 `app/layout.tsx` 中的 metadata 和 `lang`。
- **颜色与圆角**：修改 `app/globals.css` 中的 `:root` / `.dark` 变量；默认 `--radius: 0.625rem`。
- **字体**：默认系统字体，可在 `app/globals.css` 中修改；使用本地字体文件时可接入 `next/font/local`。
- **暗色样式**：已有 `.dark` 主题变量，给 `<html>` 添加 `dark` 类即可启用；模板未包含主题切换与持久化逻辑。
- **组件风格**：`components.json` 使用 `base-vega`。更改该配置不会自动更新已有组件；需要重新生成时先检查本地修改。
- **组件更新**：按需运行 `bunx --bun shadcn@latest add <组件名>`；使用 `--overwrite` 会覆盖本地组件文件。

`use-mobile` 使用 `useSyncExternalStore` 订阅媒体查询。Carousel 保留官方初始化方式，并仅对同步外部实例状态的调用添加局部 lint 注释。

所有 UI 组件保留在本地，但业务页面只需导入实际使用的组件。模板未包含文本编辑器、示例文稿、业务存储或额外的后端服务。
