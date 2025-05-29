'use client'

import '@/styles/index.nav.css'
import '@/styles/common.home.css'

export default function Nav() {
    return (
        <div className="group_1 flex-col justify-end">
            <div className="text-wrapper_4 flex-row justify-between">
                <span
                    className="text_1"
                    onClick={() => window.location.href = '/'}
                    style={{cursor: 'pointer'}}
                >
                  首页
                </span>
                <span
                    className="text_2"
                    onClick={() => window.location.href = '/cases'}
                    style={{cursor: 'pointer'}}
                >
                客户案例
                </span>
                <span
                    className="text_3"
                    onClick={() => window.location.href = '/about'}
                    style={{cursor: 'pointer'}}
                >
                关于我们
                </span>
            </div>
            <div className="box_7 flex-row">
                <div className="group_2 flex-col"/>
            </div>
        </div>

    )
}