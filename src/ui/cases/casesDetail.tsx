
import '@/styles/index.casesDetail.css'
import '@/styles/common.css'

type CasesDetailProps = {
    slug: string;
};

export default function CasesDetail({ slug }: CasesDetailProps) {
    return (
        <div className="page flex-col">
            <div className="box_2 flex-col">
                <span className="text_4">快乐一周岁{slug}</span>
                <span className="text_5">这里是一句副文案啊啊啊啊啊哈哈哈</span>
                <div className="block_2 flex-col"/>
                <div className="block_3 flex-col"/>
                <div className="block_4 flex-col"/>
            </div>
        </div>
    );
}
