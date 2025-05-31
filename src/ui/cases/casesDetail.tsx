import '@/styles/index.casesDetail.css'
import '@/styles/common.css'

type CasesDetailProps = {
    slug: string;
};

export default function CasesDetail({ slug }: CasesDetailProps) {
    const mainTitle = `快乐一周岁${slug}`;
    const minTitle = `这里是一句副文案啊啊啊啊啊哈哈哈`;

    const images = [
        '/images/cases_detail.png',
        '/images/cases_detail.png',
        '/images/cases_detail.png',
    ];

    return (
        <div className="page flex-col">
            <div className="box_detail flex-col">
                <span className="text_detail">{mainTitle}</span>
                <span className="text_detail_1">{minTitle}</span>

                <div className="block_2 flex-col gap-5 pb-5">
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`案例图${index + 1}`} // 更具体的描述
                            width="960"
                            style={{
                                borderRadius: '20px',
                                marginBottom: index === images.length - 1 ? '20px' : '0px'
                            }}
                        />
                    ))}

                </div>
            </div>
        </div>
    );
}
