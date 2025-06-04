'use client';

import '@/styles/index.cases.css';
import '@/styles/common.css';
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';

export default function Cases() {
    const categories = [
        { id: 1, name: '分类1哈哈', cases: [{ id: 1,"title": "主标题不超过15个字啊","cotent": "啊啊啊啊啊",  image: '/images/home/2.png' }, { id: 2,"title": "主标题不超过15个字啊","cotent": "啊啊啊啊啊",  image: '/images/home/1.png' }, { id: 3,"title": "主标题不超过15个字啊","cotent": "啊啊啊啊啊",  image: '/images/home/1.png' }] },
        { id: 2, name: '分类2哈哈', cases: [{ id: 5,"title": "主标题不超过15个字啊","cotent": "啊啊啊啊啊",  image: '/images/home/2.png' }, { id: 6,"title": "主标题不超过15个字啊","cotent": "啊啊啊啊啊",  image: '/images/home/1.png' }] },
        { id: 3, name: '分类3哈哈', cases: [{ id: 7,"title": "主标题不超过15个字啊","cotent": "啊啊啊啊啊",  image: '/images/home/2.png' }, { id: 8,"title": "主标题不超过15个字啊","cotent": "啊啊啊啊啊",  image: '/images/home/1.png' }, { id: 9,"title": "主标题不超过15个字啊","cotent": "啊啊啊啊啊",  image: '/images/home/1.png' }, { id: 14,"title": "主标题不超过15个字啊","cotent": "啊啊啊啊啊",  image: '/images/home/1.png' }] },
        { id: 4, name: '分类4哈哈', cases: [{ id: 10,"title": "主标题不超过15个字啊","cotent": "啊啊啊啊啊",  image: '/images/home/2.png' }, { id: 11,"title": "主标题不超过15个字啊","cotent": "啊啊啊啊啊",  image: '/images/home/1.png' }] },
        { id: 5, name: '分类5哈哈', cases: [{ id: 13,"title": "主标题不超过15个字啊","cotent": "啊啊啊啊啊",  image: '/images/home/2.png' }] },
    ];

    const [selectedCategoryId, setSelectedCategoryId] = useState<number>(categories[0].id);

    const currentCategory = categories.find(cat => cat.id === selectedCategoryId);

    return (
        <div className="page flex-col">
            <div className="cases_box1 flex-row">
                {/* 分类导航栏 */}
                <div className="cat_nav flex-row">
                    <div className="group_5 flex-col justify-between">
                        {categories.map((cat) => (
                            <div
                                key={cat.id}
                                onClick={() => setSelectedCategoryId(cat.id)}
                                className={`text-wrapper_3 flex-col cursor-pointer ${selectedCategoryId === cat.id ? 'active' : ''}`}
                            >
                                <span className={`text_5 ${selectedCategoryId === cat.id ? 'active' : ''}`}>{cat.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 当前分类下的图片展示 */}
                <div className="cases_content flex-row justify-between flex-wrap gap-4">
                    {currentCategory?.cases.map(item => (
                        <Link key={item.id} href={`/cases/${item.id}`}>
                            <Image
                                style={{ borderRadius: '20px' }}
                                width={480}
                                height={280}
                                src={item.image}
                                alt={`案例 ${item.id}`}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
