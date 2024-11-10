import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Shield, DollarSign, Umbrella, Users, Zap } from 'lucide-react'

const insuranceTerms = [
  { term: 'Premium', definition: 'The amount you pay for your insurance coverage.' },
  { term: 'Deductible', definition: 'The amount you pay out of pocket before your insurance coverage kicks in.' },
  { term: 'Limit', definition: 'The maximum amount your insurance will pay for a covered loss.' },
  { term: 'Maximum Allowance', definition: 'The highest amount an insurance company will pay for a specific service or item.' },
  { term: 'Dependents', definition: 'Family members covered under your insurance policy.' },
  // Add more terms as needed
]

export default function LandingPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTerms = insuranceTerms.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Policy Pal</h1>
          <p className="mt-2">Simplifying insurance management for you</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Understand and Maximize Your Insurance Coverage</h2>
          <p className="text-xl text-muted-foreground mb-6">
            InsuranceEase helps you manage all your insurance policies in one place, 
            making it easy to understand your coverage and take full advantage of your benefits.
          </p>
          <Button size="lg">Get Started</Button>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Shield className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>Add Your Policies</CardTitle>
              </CardHeader>
              <CardContent>
                Upload or link your insurance policies to your profile.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>Instant Overview</CardTitle>
              </CardHeader>
              <CardContent>
                Get a clear summary of all your coverages in one dashboard.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>Understand Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                Easily see what's covered, for whom, and how much you're protected.
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Quick Start Guide</h3>
          <Tabs defaultValue="signup">
            <TabsList>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
              <TabsTrigger value="add">Add Policies</TabsTrigger>
              <TabsTrigger value="explore">Explore Coverage</TabsTrigger>
            </TabsList>
            <TabsContent value="signup">
              Create your free account to get started. No credit card required.
            </TabsContent>
            <TabsContent value="add">
              Upload your policy documents or connect to your insurance providers to import your coverage details.
            </TabsContent>
            <TabsContent value="explore">
              Navigate through your dashboard to see all your policies, coverage limits, and benefits in one place.
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4">Insurance Terms Explained</h3>
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Search insurance terms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {filteredTerms.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{item.term}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.definition}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-muted py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 InsuranceEase. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}