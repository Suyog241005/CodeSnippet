import { deleteSnippet } from "@/actions";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = parseInt((await params).id);

  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });

  if (!snippet) {
    return notFound();
  }

  const deleteSnippetAction = deleteSnippet.bind(null, snippet.id);

  return (
    <div className=" flex justify-between">
      <div className="flex flex-col items-center justify-center my-2 p-4 ">
        {snippet.title && (
          <h1 className="font-bold text-4xl my-3.5">{snippet.title}</h1>
        )}
        <pre className="bg-gray-200 p-4 rounded-md w-full">
          <code>{snippet.code}</code>
        </pre>
      </div>
      <div className="flex items-center gap-4 -mt-10 rounded-md">
        <Link href={`${snippet.id}/edit`}>
          <Button>Edit</Button>
        </Link>

        <form action={deleteSnippetAction}>
          <Button variant={"destructive"} type="submit">Delete</Button>
        </form>
      </div>
    </div>
  );
}
