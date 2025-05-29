import '@/styles/index.nav.css'
import '@/styles/common.nav.css'
export default function Nav() {
  return (
      // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-2 pb-20 gap-16 sm:p-8 font-[family-name:var(--font-geist-sans)]">
      <div className="group_1 flex-col justify-end">
          <div className="text-wrapper_4 flex-row justify-between">
              <span className="text_1">首页</span> <span className="text_2">客户案例</span>
              <span className="text_3">关于我们</span>
          </div>
      </div>
  )
}