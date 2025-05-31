import CasesDetail from "@/ui/cases/casesDetail";

export type paramsType = Promise<{ slug: string }>;

export default async function Page(props: { params : paramsType }) {
    // 获取动态路由参数
    // console.log(props);
    const { slug } = await props.params;
    // console.log(slug);
    return (
        <div>
            <CasesDetail slug={slug} />
        </div>
    );
}