import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from 'lucide-react'


export default function IntegrationCard({ onStatusUpdate }: { onStatusUpdate: (error: string | null, successMessage: string | null) => void }) {
  const [isLinking, setIsLinking] = useState(false)

  const handleLinkAccount = async () => {
    setIsLinking(true)

    try {
      // TODO: Implement API call to 3rd party insurance provider
      await new Promise(resolve => setTimeout(resolve, 1500))
      onStatusUpdate(null, 'Account linked successfully!')
    } catch (err) {
      onStatusUpdate('An error occurred while linking the account. Please try again.', null)
    } finally {
      setIsLinking(false)
    }
  }


  return (
    <Card>
      <CardHeader>
        <CardTitle>Link Insurance Account</CardTitle>
        <CardDescription>Connect your insurance provider account</CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={handleLinkAccount} disabled={isLinking} className="w-full">
          {isLinking ? 'Linking...' : 'Link Account'}
          <Link className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}