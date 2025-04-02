import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/prisma";
import { log } from "console";
import { redirect } from "next/navigation";

export default function () {

    async function createSnippet(formData:FormData) {
        "use server"
        const title = formData.get("title")?.toString() || ""
        const code = formData.get("code")?.toString() || ""
        console.log({ title, code })

        const snippet=await prisma.snippet.create({
            data: {
                title,
                code,
            },
        })
        console.log(snippet)
        redirect("/")
        
    }

  return (
    <form action={createSnippet}>
      <div className="flex flex-col gap-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div>
          <Label htmlFor="code">Code</Label>
          <Textarea
            id="code"
            name="code"
            placeholder="Code"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
      </div>
      <Button type="submit" className="my-2.5">
        New
      </Button>
    </form>
  );
}
