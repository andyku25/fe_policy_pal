import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FileUp } from 'lucide-react'



export default function PolicyUploaderCard({ onStatusUpdate }: { onStatusUpdate: (error: string | null, successMessage: string | null) => void }) {
  const [isUploading, setIsUploading] = useState(false)

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setIsUploading(true)

    try {
      // TODO: Handle aggregation of policy data
      await new Promise(resolve => setTimeout(resolve, 1500))
      onStatusUpdate(null, 'File uploaded successfully!')
    } catch (err) {
      onStatusUpdate('An error occurred while uploading the file. Please try again.', null)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Coverage Statement</CardTitle>
        <CardDescription>Upload your insurance coverage statement</CardDescription>
      </CardHeader>
      <CardContent>
        <Label htmlFor="file-upload" className="block">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-gray-400 transition-colors">
            <FileUp className="mx-auto h-12 w-12 text-gray-400" />
            <span className="mt-2 block text-sm font-semibold text-gray-900">
              {isUploading ? 'Uploading...' : 'Click to upload or drag and drop'}
            </span>
            <span className="mt-2 block text-xs text-gray-500">
              PDF, PNG, JPG up to 10MB
            </span>
          </div>
          <Input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileUpload}
            disabled={isUploading}
            accept=".pdf,.png,.jpg,.jpeg"
          />
        </Label>
      </CardContent>
    </Card>
  )
}