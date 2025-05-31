'use client';

import '@/styles/index.cases.css';
import '@/styles/common.css';
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';

export default function Cases() {
    const categories = [{
        id: 1,
        name: '分类1哈哈',
        cases: [{
            id: 1,
            image: '/images/cases1.png'
        }, {
            id: 2,
            image: '/images/cases1.png'
        }, {
            id: 3,
            image: '/images/cases1.png'
        }]
    },
        {
            id: 2,
            name: '分类2哈哈',
            cases: [{
                id: 5,
                image: '/images/cases1.png'
            }, {
                id: 6,
                image: '/images/cases1.png'
            }]
        },
        {
            id: 3,
            name: '分类3哈哈',
            cases: [{
                id: 7,
                image: '/images/cases1.png'
            }, {
                id: 8,
                image: '/images/cases1.png'
            }, {
                id: 9,
                image: '/images/cases1.png'
            }, {
                id: 14,
                image: '/images/cases1.png'
            }]
        },
        {
            id: 4,
            name: '分类4哈哈',
            cases: [{
                id: 10,
                image: '/images/cases1.png'
            }, {
                id: 11,
                image: '/images/cases1.png'
            }]
        },
        {
            id: 5,
            name: '分类5哈哈',
            cases: [{
                id: 13,
                image: '/images/cases1.png'
            }]
        },
    ];

    const [selectedCategoryId, setSelectedCategoryId] = useState<number>(categories[0].id);

    const currentCategory = categories.find(cat => cat.id === selectedCategoryId);

    return (
        <div className="page flex-col">
            <div className="cases_box1 flex-row">
                {/* 分类导航栏 */}
                <div className="cat_nav flex-row">
                    <div className="group_5 flex-col justify-between">
                        {categories.map((cat, index) => (
                            <div
                                key={cat.id}
                                onClick={() => setSelectedCategoryId(cat.id)}
                                className={`text-wrapper_${index + 2} flex-col cursor-pointer ${selectedCategoryId === cat.id ? 'active' : ''}`}
                            >
                                <span className={`text_${index + 4}`}>{cat.name}</span>
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
