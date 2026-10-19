import { ArrowUpRight, Layers } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-24">
      <div className="w-full max-w-xl space-y-8">
        <div className="flex size-12 items-center justify-center rounded-xl border bg-muted">
          <Layers className="size-6" aria-hidden="true" />
        </div>
        <div className="space-y-4">
          <Badge variant="secondary">准备就绪</Badge>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Next.js + shadcn/ui
          </h1>
          <p className="text-base leading-7 text-muted-foreground">
            一个简洁的开发起点。修改 app/page.tsx 开始构建，
            从 components/ui 导入你需要的组件。
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            className={cn(buttonVariants())}
            href="https://ui.shadcn.com/docs/components"
            target="_blank"
            rel="noopener noreferrer"
          >
            组件文档 <ArrowUpRight aria-hidden="true" />
          </a>
          <a
            className={cn(buttonVariants({ variant: "outline" }))}
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js 文档 <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <p className="border-t pt-6 text-xs leading-6 text-muted-foreground">
          App Router · TypeScript · Tailwind CSS 4 · Base UI · Vega
        </p>
      </div>
    </main>
  );
}
