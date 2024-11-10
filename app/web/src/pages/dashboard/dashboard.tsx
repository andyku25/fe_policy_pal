import { useState } from 'react'
import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription } from "@/components/ui/alert"

import IntegrationCard from '@/components/uploader/integration_card'
import PolicyUploaderCard from '@/components/uploader/policyUploader_card'
import AddCreditCard from '@/components/uploader/addCreditCard_card'
import Wallet from '@/components/profile/wallet'

export default function Dashboard() {
  
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const handleStatusUpdate = (error: string | null, successMessage: string | null) => {
    setError(error)
    setSuccessMessage(successMessage)
  }

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-8">Manage Your Policy and Accounts</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <IntegrationCard onStatusUpdate={handleStatusUpdate} />
        <PolicyUploaderCard onStatusUpdate={handleStatusUpdate} />
        <AddCreditCard />
      </div>

      {/* Conditional Alert component */}
      {(error || successMessage) && (
        <Alert variant={error ? "destructive" : "default"} className="mt-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            {error || successMessage}
          </AlertDescription>
        </Alert>
      )}

      <Wallet />
      
    </div>
  )
}