import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const LOGIN_DISMISS_KEY = 'ripple-login-dismissed';
const DISMISS_DURATION_DAYS = 7;

export const shouldShowLoginPrompt = (): boolean => {
  try {
    const dismissed = localStorage.getItem(LOGIN_DISMISS_KEY);
    if (!dismissed) return true;
    
    const dismissedDate = new Date(dismissed);
    const now = new Date();
    const daysSinceDismissed = (now.getTime() - dismissedDate.getTime()) / (1000 * 60 * 60 * 24);
    
    return daysSinceDismissed >= DISMISS_DURATION_DAYS;
  } catch {
    return true;
  }
};

const dismissLoginPrompt = () => {
  try {
    localStorage.setItem(LOGIN_DISMISS_KEY, new Date().toISOString());
  } catch (e) {
    console.error('Error saving dismiss state:', e);
  }
};

interface LoginPromptCardProps {
  onDismiss?: () => void;
}

export const LoginPromptCard = ({ onDismiss }: LoginPromptCardProps) => {
  const { signInWithEmail, signUpWithEmail } = useAuth();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    
    setLoading(true);
    try {
      const { error } = isSignUp 
        ? await signUpWithEmail(email, password)
        : await signInWithEmail(email, password);
      
      if (error) {
        toast({
          title: isSignUp ? "Sign up failed" : "Sign in failed",
          description: error.message,
          variant: "destructive",
        });
      } else if (isSignUp) {
        toast({
          title: "Account created!",
          description: "You're now signed in and your progress will be saved.",
        });
      }
    } catch (error) {
      console.error('Auth error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDismiss = () => {
    dismissLoginPrompt();
    onDismiss?.();
  };

  return (
    <Card className="animate-float-up mt-6 border-2 border-secondary/30 bg-secondary/5">
      <CardContent className="pt-6 space-y-4">
        <div className="text-center">
          <div className="text-3xl mb-2">🔒</div>
          <h3 className="font-display text-lg font-semibold text-foreground">
            Save your streak!
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {isSignUp ? "Create an account" : "Sign in"} to track your progress across devices.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
          <Button 
            type="submit"
            disabled={loading}
            className="w-full"
            size="lg"
          >
            {loading ? 'Please wait...' : isSignUp ? 'Create Account' : 'Sign In'}
          </Button>
        </form>

        <div className="text-center space-y-2">
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-sm text-secondary hover:text-secondary/80 transition-colors"
          >
            {isSignUp ? "Already have an account? Sign in" : "Need an account? Sign up"}
          </button>
          <br />
          <button
            onClick={handleDismiss}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Maybe later
          </button>
        </div>
      </CardContent>
    </Card>
  );
};
