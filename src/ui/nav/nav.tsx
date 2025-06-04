'use client'
import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import '@/styles/index.nav.css'
import '@/styles/common.css'

export default function Nav() {
    const pathname = usePathname()
    const [activePath, setActivePath] = useState('/')

    // 同步当前路径，确保刷新后红条位置正确
    useEffect(() => {
        setActivePath(pathname)
    }, [pathname])

    // 红条位置映射：根据导航项宽度和顺序设置
    // const indicatorLeftMap: Record<string, string> = {
    //     '/': '479px',
    //     '/cases': '683px',
    //     '/about': '906px',
    // }
    const getIndicatorLeft = (path: string): string => {
        if (path.startsWith('/cases')) return '683px';
        if (path.startsWith('/about')) return '906px';
        return '479px'; // 默认首页
    };


    const handleNavClick = (path: string) => {
        setActivePath(path)
        window.location.href = path // 强制跳转 + 刷新
    }

    return (
        <div className="nav_parent flex-col justify-end">
            <div className="nav_box flex-row justify-between">
                <span
                    className={`${pathname === '/' ? ' nav-active' : ''}`}
                    onClick={() => handleNavClick('/')}
                    style={{cursor: 'pointer'}}
                >
                  首页
                </span>
                <span
                    className={`${activePath.startsWith('/cases') ? ' nav-active' : ''}`}
                    onClick={() => handleNavClick('/cases')}
                    style={{cursor: 'pointer'}}
                >
                 客户案例
                </span>
                <span
                    className={`${activePath.startsWith('/about') ? ' nav-active' : ''}`}
                    onClick={() => handleNavClick('/about')}
                    style={{cursor: 'pointer'}}
                >
                 关于我们
                </span>
            </div>
            <div className="box_7"
                 style={{ marginLeft: getIndicatorLeft(activePath) || '0px' }}>
                <div className="group_2"/>
            </div>
        </div>

    )
}