'use client'
import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import '@/styles/index.nav.css'
import '@/styles/common.home.css'

export default function Nav() {
    const pathname = usePathname()
    const [activePath, setActivePath] = useState('/')

    // 同步当前路径，确保刷新后红条位置正确
    useEffect(() => {
        setActivePath(pathname)
    }, [pathname])

    // 红条位置映射：根据导航项宽度和顺序设置
    const indicatorLeftMap: Record<string, string> = {
        '/': '479px',
        '/cases': '693px',
        '/about': '906px',
    }

    const handleNavClick = (path: string) => {
        setActivePath(path)
        window.location.href = path // 强制跳转 + 刷新
    }

    return (
        <div className="group_1 flex-col justify-end">
            <div className="text-wrapper_4 flex-row justify-between">
                <span
                    className="text_1"
                    onClick={() => handleNavClick('/')}
                    style={{cursor: 'pointer'}}
                >
                  首页
                </span>
                <span
                    className="text_2"
                    onClick={() => handleNavClick('/cases')}
                    style={{cursor: 'pointer'}}
                >
                客户案例
                </span>
                <span
                    className="text_3"
                    onClick={() => handleNavClick('/about')}
                    style={{cursor: 'pointer'}}
                >
                关于我们
                </span>
            </div>
            <div className="box_7"
                 style={{ marginLeft: indicatorLeftMap[activePath] || '0px' }}>
                <div className="group_2"/>
            </div>
        </div>

    )
}