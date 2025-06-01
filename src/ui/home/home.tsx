import '@/styles/index.home.css'
import '@/styles/common.css'
import Image from 'next/image'

export default function Home() {
    //  获取首页的图片
    const images = [
        '/images/home/轮播图.png',
        '/images/home/1.png',
        '/images/home/2.png',
        '/images/home/3.png',
        '/images/home/4.png',
        '/images/home/5.png',
        '/images/home/6.png',
    ];

    const infos = [
        {
            title: '营业时间',
            content: '8:00-22:00',
            image: '/images/home-page.png',
        },
        {
            title: '微信',
            content: '一言家庭摄影',
            image: '/images/home-page.png',
        },
        {
            title: '服务热线',
            content: '18825051395',
            image: '/images/home-page.png',
        },
        {
            title: ' 小红书',
            content: '黎啦啦啦',
            image: '/images/home-page.png',
        }
        ];
    return (
        <div className="page flex-col">
            <Image width={1440} height={500} src={images[0]} alt={"home-page"}/>
            <div className="box_9 flex-row">
                <div className="block_1 flex-col">
                    <div className="block_2 flex-col"/>
                    <div className="block_3 flex-col"/>
                </div>
                <div className="text-group_3 flex-col justify-between">
                    <span className="text_8">{infos[0].title}</span>
                    <span className="text_9">{infos[0].content}</span>
                </div>
                <div className="block_4 flex-col">
                    <div className="box_10 flex-col"/>
                    <div className="box_11 flex-col"/>
                </div>
                <div className="text-group_4 flex-col justify-between">
                    <span className="text_10">{infos[1].title}</span>
                    <span className="text_11">{infos[1].content}</span>
                </div>
                <div className="block_5 flex-col">
                    <div className="group_8 flex-col"/>
                    <div className="group_9 flex-col"/>
                </div>
                <div className="text-group_5 flex-col justify-between">
                    <span className="text_12">{infos[2].title}</span>
                    <span className="text_13">{infos[2].content}</span>
                </div>
                <div className="block_6 flex-col">
                    <div className="group_10 flex-col"/>
                    <div className="group_11 flex-col"/>
                </div>
                <div className="text-group_6 flex-col justify-between">
                    <span className="text_14">{infos[3].title}</span>
                    <span className="text_15">{infos[3].content}</span>
                </div>
            </div>
            <div className="text-group_7 flex-col justify-between">
                <div className="text-wrapper_2">
                    <span className="text_4">一言家庭摄影</span>
                    <span className="text_5">&nbsp;</span>
                    <span className="text_6">家庭的爱，镜头下的故事</span>
                </div>
                <span className="text_7">让照片讲述你们的故事，让回忆永远鲜活</span>
            </div>
            <div className="box_12 flex-row justify-between">
                <Image style={{borderRadius: '20px'}} width={590} height={340} src={images[1]} alt="image_1"/>
                <Image style={{borderRadius: '20px'}} width={590} height={340} src={images[2]} alt="image_1"/>
            </div>
            <div className="box_13 flex-row justify-between">

                <Image width={285} height={320} src={images[3]} alt="image_1"/>
                <Image style={{marginLeft: 20, borderRadius: '20px'}}  width={285} height={320} src={images[3]} alt="image_1"/>
                <Image style={{marginLeft: 20, borderRadius: '20px'}}  width={285} height={320} src={images[4]} alt="image_1"/>
                <Image style={{marginLeft: 20, borderRadius: '20px'}}  width={285} height={320} src={images[5]} alt="image_1"/>

            </div>
        </div>
    );
}
