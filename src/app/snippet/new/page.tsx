"use client";

import { createSnippet } from "@/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { useActionState } from "react";

export default function Page() {
  const [formStateData, action] = useActionState(createSnippet, { message: "" });

  return (
    <form action={action}>
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
      {formStateData.message && <div className="bg-red-200 border-2 border-red-600 mt-2 p-2">{formStateData.message}</div>}
      <Button type="submit" className="my-2.5">
        New
      </Button>
    </form>
  );
}
