import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search } from 'lucide-react'


export default function AddCreditCard() {

  const [searchQuery, setSearchQuery] = useState('')

  const handleCreditCardSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // TODO: Implement credit card search functionality
    console.log('Searching for credit card:', searchQuery)
  }

  return (

    <Card>
      <CardHeader>
        <CardTitle>Add Credit Card</CardTitle>
        <CardDescription>Search and add credit cards to your wallet</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleCreditCardSearch} className="space-y-4">
          <div className="flex space-x-2">
            <Input
              type="text"
              placeholder="Search credit cards..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          <Plus className="mr-2 h-4 w-4" /> Add to Wallet
        </Button>
      </CardFooter>
    </Card>
      
  )
}