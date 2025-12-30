import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";

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
  const { signInWithGoogle } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error('Sign in error:', error);
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
      <CardContent className="pt-6 text-center space-y-4">
        <div className="text-3xl">🔒</div>
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground">
            Save your streak!
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Sign in to track your progress across devices and see your improvement over time.
          </p>
        </div>
        
        <div className="space-y-3 pt-2">
          <Button 
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full gap-2"
            size="lg"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            {loading ? 'Signing in...' : 'Continue with Google'}
          </Button>
          
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
