import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import {  CreditCard } from 'lucide-react'

export default function Wallet() {

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Your Linked Accounts</CardTitle>
        <CardDescription>Manage your connected accounts and cards</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-2 bg-secondary rounded-lg">
            <div className="flex items-center space-x-4">
              <CreditCard className="h-6 w-6" />
              <span>Example Insurance Co.</span>
            </div>
            <Button variant="ghost" size="sm">Manage</Button>
          </div>
          <div className="flex items-center justify-between p-2 bg-secondary rounded-lg">
            <div className="flex items-center space-x-4">
              <CreditCard className="h-6 w-6" />
              <span>Example Credit Card</span>
            </div>
            <Button variant="ghost" size="sm">Manage</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}