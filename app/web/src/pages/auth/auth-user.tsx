import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, Lock, AlertCircle, User } from 'lucide-react'

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
})

const registerSchema = loginSchema.extend({
  name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
  confirmPassword: z.string().min(8, { message: "Password must be at least 8 characters long" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

type LoginFormValues = z.infer<typeof loginSchema>
type RegisterFormValues = z.infer<typeof registerSchema>

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  })

  const registerForm = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (data: LoginFormValues | RegisterFormValues) => {
    setIsLoading(true)
    setError(null)
    try {
      // PLACEHOLDER: Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log(isLogin ? 'Login successful' : 'Registration successful', data)
      //  TODO: Send the data to your authentication service
    } catch (err) {
      setError(`An error occurred during ${isLogin ? 'login' : 'registration'}. Please try again.`)
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleAuth = async () => {
    setIsLoading(true)
    setError(null)
    try {
      // TEMP: Mock Google authentication
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Google authentication initiated')
      // TODO: initiate the Google OAuth flow
    } catch (err) {
      setError(`An error occurred during Google authentication. Please try again.`)
    } finally {
      setIsLoading(false)
    }
  }

  const toggleAuthMode = () => {
    setIsLogin(!isLogin)
    setError(null)
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">{isLogin ? 'Welcome back' : 'Create an account'}</h1>
        <p className="text-sm text-muted-foreground">
          {isLogin ? 'Sign in to your account' : 'Sign up for a new account'}
        </p>
      </div>
      
      <form onSubmit={isLogin ? loginForm.handleSubmit(onSubmit) : registerForm.handleSubmit(onSubmit)} className="space-y-4">
        {!isLogin && (
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="pl-10"
                {...registerForm.register('name')}
              />
            </div>
            {registerForm.formState.errors.name && (
              <p className="text-sm text-destructive">{registerForm.formState.errors.name.message}</p>
            )}
          </div>
        )}
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="pl-10"
              {...(isLogin ? loginForm.register('email') : registerForm.register('email'))}
            />
          </div>
          {(isLogin ? loginForm.formState.errors.email : registerForm.formState.errors.email) && (
            <p className="text-sm text-destructive">
              {isLogin ? loginForm.formState.errors.email?.message : registerForm.formState.errors.email?.message}
            </p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="pl-10"
              {...(isLogin ? loginForm.register('password') : registerForm.register('password'))}
            />
          </div>
          {(isLogin ? loginForm.formState.errors.password : registerForm.formState.errors.password) && (
            <p className="text-sm text-destructive">
              {isLogin ? loginForm.formState.errors.password?.message : registerForm.formState.errors.password?.message}
            </p>
          )}
        </div>

        {!isLogin && (
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                className="pl-10"
                {...registerForm.register('confirmPassword')}
              />
            </div>
            {registerForm.formState.errors.confirmPassword && (
              <p className="text-sm text-destructive">{registerForm.formState.errors.confirmPassword.message}</p>
            )}
          </div>
        )}
        
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (isLogin ? 'Signing in...' : 'Signing up...') : (isLogin ? 'Sign in' : 'Sign up')}
        </Button>
      </form>
      
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>
      
      <Button variant="outline" className="w-full" onClick={handleGoogleAuth} disabled={isLoading}>
        <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
          <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
        </svg>
        {isLogin ? 'Sign in' : 'Sign up'} with Google
      </Button>
      
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="text-center">
        <Button variant="link" onClick={toggleAuthMode}>
          {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
        </Button>
      </div>
    </div>
  )
}