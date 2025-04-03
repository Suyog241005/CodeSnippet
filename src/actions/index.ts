"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const saveSnippet = async (id: number, code: string) => {
  await prisma.snippet.update({
    where: {
      id,
    },
    data: {
      code,
    },
  });
  revalidatePath(`/snippet/${id}`);
  redirect(`/snippet/${id}`);
};

export const deleteSnippet = async (id: number) => {
    await prisma.snippet.delete({
        where: {
            id,
        },
    });
    revalidatePath("/");
    redirect("/");
}

export async function createSnippet(prevState: { message: string }, formData: FormData) {
  try {
    const title = formData.get("title");
    const code = formData.get("code");
    console.log({ title, code });

    if (typeof title !== "string" || title.length < 4) {
      return { message: "Title is required and must be longer than 4 characters" };
    }
    if (typeof code !== "string" || code.length < 4) {
      return { message: "Code is required and must be longer than 4 characters" };
    }

    const snippet = await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log(snippet);
    revalidatePath("/");
  } catch {
    return { message: "Error creating snippet" };
  }
  redirect("/");
}