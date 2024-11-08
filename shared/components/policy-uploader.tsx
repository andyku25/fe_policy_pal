'use client'

import { useState } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function InsurancePolicyUploader() {
  const [policyTitle, setPolicyTitle] = useState('')
  const [file, setFile] = useState<File | null>(null)

  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Enter your insurance policy details here...</p>',
  })

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0])
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Here you would typically send the data to your server
    console.log('Policy Title:', policyTitle)
    console.log('Policy Content:', editor?.getHTML())
    console.log('File:', file)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-bold">Insurance Policy Uploader</h1>
      </header>

      <main className="flex-grow p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="policy-title">Policy Title</Label>
            <Input
              id="policy-title"
              value={policyTitle}
              onChange={(e) => setPolicyTitle(e.target.value)}
              placeholder="Enter policy title"
              required
            />
          </div>

          <div>
            <Label htmlFor="policy-content">Policy Content</Label>
            <div className="border rounded-md p-2">
              <EditorContent editor={editor} />
            </div>
          </div>

          <div>
            <Label htmlFor="file-upload">Upload Additional Documents</Label>
            <Input
              id="file-upload"
              type="file"
              onChange={handleFileChange}
              className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
            />
          </div>

          <Button type="submit">Submit Policy</Button>
        </form>
      </main>

      <footer className="bg-muted text-muted-foreground p-4 text-center">
        <p>&copy; 2024 Insurance Company. All rights reserved.</p>
      </footer>
    </div>
  )
}