'use client';

import '@/styles/index.cases.css';
import '@/styles/common.css';
import Link from "next/link";

export default function Cases() {
    const categories = [
        { id: 1, name: '分类1哈哈' },
        { id: 2, name: '分类2哈哈' },
        { id: 3, name: '分类3哈哈' },
        { id: 4, name: '分类4哈哈' },
        { id: 5, name: '分类5哈哈' },
    ];

    return (
        <div className="page flex-col">
            <div className="cases_box1 flex-row">
                <div className="cat_nav flex-row">
                    <div className="group_5 flex-col justify-between">
                        {categories.map((cat, index) => (
                            <Link key={cat.id} href={`/cases/${cat.id}`}>
                                <div key={cat.id} className={`text-wrapper_${index + 2} flex-col`}>
                                    <span className={`text_${index + 4}`}>{cat.name}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="cases_content flex-row justify-between">
                    <div className="cases_content_box"/>
                    <div className="cases_content_box"/>
                    <div className="cases_content_box"/>
                    <div className="cases_content_box"/>
                    <div className="cases_content_box"/>
                    <div className="cases_content_box"/>
                </div>
            </div>
        </div>
    );
}
