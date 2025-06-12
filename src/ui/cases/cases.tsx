'use client';

import '@/styles/index.cases.css';
import '@/styles/common.css';
import Link from "next/link";
import Image from "next/image";
import {useEffect, useState} from 'react';

type Case = {
    id: number;
    title: string;
    content: string;
    image: string;
};
type Category = {
    id: number;
    name: string;
    cases: Case[];
};

export default function Cases() {
    const [types, setTypes] = useState<Category[]>([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | undefined>(undefined);

    useEffect(() => {
        fetch('/api/types')
            .then(res => res.json())
            .then(data => {
                setTypes(data);
            });
    }, []);

    useEffect(() => {
        if (types.length > 0 && selectedCategoryId === undefined) {
            setSelectedCategoryId(types[0].id);
        }
    }, [types, selectedCategoryId]);

    const currentCategory = types.find(cat => cat.id === selectedCategoryId);

    return (
        <div className="page flex-col">
            <div className="cases_box1 flex-row">
                {/* 分类导航栏 */}
                <div className="cat_nav flex-row">
                    <div className="group_5 flex-col justify-between">
                        {types.map((cat) => (
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
                <div className="cases_content flex-row justify-between gap-4">
                    {currentCategory?.cases.map((image: Case) => (
                        <Link key={image.id} href={`/cases/${image.id}`}>
                            <div className="image-hover-wrapper" key={image.id} style={{width: 480, height: 280}}>
                                <Image
                                    className="image-hover-img"
                                    style={{borderRadius: '20px'}}
                                    width={480}
                                    height={280}
                                    src={image.image}
                                    alt={`image_${image.id + 1}`}
                                />
                                <div className="hover-info">
                                    <div className="hover-title">{image.title}</div>
                                    <div className="hover-content">{image.content}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}