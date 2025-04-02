import EditorSnippet from "@/components/EditorSnippet";
import { prisma } from "@/lib/prisma";
export default async function({params}: {params:Promise <{id: string}>}) {
    const id = parseInt((await params).id);
    const snippet = await prisma.snippet.findUnique({
        where: {
            id,
        },
    });

    if(!snippet) {
        return <h1>Snippet not found</h1>;
    }

    return <div>
        <EditorSnippet snippet={snippet}/>
    </div>

}