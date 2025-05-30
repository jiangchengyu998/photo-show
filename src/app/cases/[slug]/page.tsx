import CasesDetail from "@/ui/cases/casesDetail";

export default async function Page({params}: { params: { slug: string } }) {
    const {slug} = await params;

    return (
        <div>
            <CasesDetail slug={slug}></CasesDetail>
        </div>
    );
}

