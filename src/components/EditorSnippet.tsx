"use client"
import {Editor} from '@monaco-editor/react'
import React, { useState } from 'react'
import type { Snippet } from '@prisma/client'
import { Button } from './ui/button'
import { saveSnippet } from '@/actions'

const EditorSnippet = ({snippet}:{snippet:Snippet}) => {
  const [code,setCode]= useState(snippet.code);

  const handleEditorChange = (value:string | undefined) => {
    if(value) setCode(value)
    }

  const savedSnippetAction= saveSnippet.bind(null,snippet.id,code)

  return (
    <div className='flex flex-col gap-4'>
      <form action={savedSnippetAction} className='flex justify-between items-center'>
        <h1 className='font-bold text-xl '>
          Your Code Editor
        </h1>
        <Button type='submit'>Save</Button>
      </form>
      <Editor
      height={"40vh"}
      defaultLanguage='javascript'
      defaultValue={code}
      theme='vs-dark'
      onChange={handleEditorChange}
      />
    </div>
  )
}

export default EditorSnippet
