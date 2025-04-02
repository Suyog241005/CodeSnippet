import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const snippets = (await prisma.snippet.findMany());

  return (
    <div className="m-10">
      <h1 className="font-bold text-4xl"> Home </h1>
      <div className="flex items-center justify-between">
        <h1>Snippets</h1>
        <Link href={"/snippet/new"}>
          <Button className="cursor-pointer">New</Button>
        </Link>

        </div>
        {
          snippets.map((snippet=>(
            <div key={snippet.id} className="flex items-center justify-between bg-gray-300 my-2 p-4 rounded-md">

            <h1> {snippet.title}</h1>
            <Link href={`/snippet/${snippet.id}`}>
              <Button variant={"link"} className="cursor-pointer">View</Button>
            </Link>
            </div>
          )))
        }
    </div>
  );
}
