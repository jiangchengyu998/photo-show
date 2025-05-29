import CasesDetail from "@/ui/cases/casesDetail";

export default function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;

    return (
        <div>
            <CasesDetail slug={slug} />
        </div>
    );
}
