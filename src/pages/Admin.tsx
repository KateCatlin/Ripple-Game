import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { Lock, Users, Trophy, UserPlus, LogIn, HelpCircle, BarChart3 } from "lucide-react";

const ADMIN_PASSWORD = "ripple2024"; // Simple password protection

interface AnalyticsEvent {
  id: string;
  event_name: string;
  created_at: string;
  session_id: string | null;
  user_id: string | null;
  metadata: Record<string, unknown> | null;
}

interface FunnelData {
  question: string;
  count: number;
  dropoff: number;
}

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
      sessionStorage.setItem("admin_auth", "true");
    } else {
      setError("Incorrect password");
    }
  };

  useEffect(() => {
    // Check if already authenticated this session
    if (sessionStorage.getItem("admin_auth") === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchEvents();
    }
  }, [isAuthenticated]);

  const fetchEvents = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('analytics_events' as 'game_results')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setEvents(data as unknown as AnalyticsEvent[]);
    }
    setLoading(false);
  };

  // Calculate stats
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const last7Days = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

  const getEventCount = (eventName: string, since?: Date) => {
    return events.filter(e => {
      const matchesName = e.event_name === eventName;
      if (!since) return matchesName;
      return matchesName && new Date(e.created_at) >= since;
    }).length;
  };

  // Calculate funnel data
  const questionAnswers = events.filter(e => e.event_name === 'question_answered');
  const q1Count = questionAnswers.filter(e => (e.metadata as { question_number?: number })?.question_number === 1).length;
  const q2Count = questionAnswers.filter(e => (e.metadata as { question_number?: number })?.question_number === 2).length;
  const q3Count = questionAnswers.filter(e => (e.metadata as { question_number?: number })?.question_number === 3).length;

  const funnelData: FunnelData[] = [
    { question: "Q1 Answered", count: q1Count, dropoff: 0 },
    { question: "Q2 Answered", count: q2Count, dropoff: q1Count > 0 ? Math.round((1 - q2Count / q1Count) * 100) : 0 },
    { question: "Q3 Answered", count: q3Count, dropoff: q2Count > 0 ? Math.round((1 - q3Count / q2Count) * 100) : 0 },
  ];

  // Daily trends for last 7 days
  const dailyData = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today.getTime() - i * 24 * 60 * 60 * 1000);
    const nextDate = new Date(date.getTime() + 24 * 60 * 60 * 1000);
    const dayEvents = events.filter(e => {
      const eventDate = new Date(e.created_at);
      return eventDate >= date && eventDate < nextDate;
    });
    dailyData.push({
      date: date.toLocaleDateString('en-US', { weekday: 'short' }),
      games: dayEvents.filter(e => e.event_name === 'game_completed').length,
      signups: dayEvents.filter(e => e.event_name === 'signup_completed').length,
    });
  }

  // Stats vs Leaderboard comparison data
  const statsVsLeaderboardData = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today.getTime() - i * 24 * 60 * 60 * 1000);
    const nextDate = new Date(date.getTime() + 24 * 60 * 60 * 1000);
    const dayEvents = events.filter(e => {
      const eventDate = new Date(e.created_at);
      return eventDate >= date && eventDate < nextDate;
    });
    statsVsLeaderboardData.push({
      date: date.toLocaleDateString('en-US', { weekday: 'short' }),
      stats: dayEvents.filter(e => e.event_name === 'stats_viewed').length,
      leaderboard: dayEvents.filter(e => e.event_name === 'leaderboard_viewed').length,
    });
  }

  const totalStatsViewed = getEventCount('stats_viewed');
  const totalLeaderboardViewed = getEventCount('leaderboard_viewed');

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-sm">
          <CardHeader className="text-center">
            <Lock className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
            <CardTitle>Admin Dashboard</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            />
            {error && <p className="text-destructive text-sm">{error}</p>}
            <Button onClick={handleLogin} className="w-full">
              Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
          <Button 
            variant="outline" 
            onClick={() => {
              sessionStorage.removeItem("admin_auth");
              setIsAuthenticated(false);
            }}
          >
            Logout
          </Button>
        </div>

        {loading ? (
          <p className="text-muted-foreground">Loading analytics...</p>
        ) : (
          <>
            {/* Summary Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <Trophy className="w-4 h-4" />
                    <span className="text-sm">Games Completed</span>
                  </div>
                  <p className="text-2xl font-bold">{getEventCount('game_completed')}</p>
                  <p className="text-xs text-muted-foreground">Today: {getEventCount('game_completed', today)}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Leaderboard Views</span>
                  </div>
                  <p className="text-2xl font-bold">{getEventCount('leaderboard_viewed')}</p>
                  <p className="text-xs text-muted-foreground">Today: {getEventCount('leaderboard_viewed', today)}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <UserPlus className="w-4 h-4" />
                    <span className="text-sm">Signups</span>
                  </div>
                  <p className="text-2xl font-bold">{getEventCount('signup_completed')}</p>
                  <p className="text-xs text-muted-foreground">Today: {getEventCount('signup_completed', today)}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <LogIn className="w-4 h-4" />
                    <span className="text-sm">Logins</span>
                  </div>
                  <p className="text-2xl font-bold">{getEventCount('login_completed')}</p>
                  <p className="text-xs text-muted-foreground">Today: {getEventCount('login_completed', today)}</p>
                </CardContent>
              </Card>
            </div>

            {/* Question Funnel */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5" />
                  Question Funnel (Drop-off Analysis)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={funnelData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="question" className="text-xs" />
                      <YAxis className="text-xs" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--border))' 
                        }}
                        formatter={(value, name) => [value, name === 'count' ? 'Answers' : 'Drop-off %']}
                      />
                      <Bar dataKey="count" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                  {funnelData.map((d, i) => (
                    <div key={d.question}>
                      <p className="text-sm text-muted-foreground">{d.question}</p>
                      <p className="font-bold">{d.count}</p>
                      {i > 0 && (
                        <p className="text-xs text-destructive">-{d.dropoff}% drop-off</p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Stats vs Leaderboard Engagement */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Stats vs Leaderboard Tab Engagement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">Stats Tab Views</p>
                    <p className="text-2xl font-bold">{totalStatsViewed}</p>
                    <p className="text-xs text-muted-foreground">Today: {getEventCount('stats_viewed', today)}</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">Leaderboard Tab Views</p>
                    <p className="text-2xl font-bold">{totalLeaderboardViewed}</p>
                    <p className="text-xs text-muted-foreground">Today: {getEventCount('leaderboard_viewed', today)}</p>
                  </div>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={statsVsLeaderboardData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="date" className="text-xs" />
                      <YAxis className="text-xs" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--border))' 
                        }}
                      />
                      <Bar dataKey="stats" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} name="Stats Tab" />
                      <Bar dataKey="leaderboard" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} name="Leaderboard Tab" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    Preference Ratio: {totalStatsViewed + totalLeaderboardViewed > 0 
                      ? `${Math.round((totalStatsViewed / (totalStatsViewed + totalLeaderboardViewed)) * 100)}% Stats / ${Math.round((totalLeaderboardViewed / (totalStatsViewed + totalLeaderboardViewed)) * 100)}% Leaderboard`
                      : 'No data yet'}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Daily Trends */}
            <Card>
              <CardHeader>
                <CardTitle>Last 7 Days Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={dailyData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="date" className="text-xs" />
                      <YAxis className="text-xs" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--border))' 
                        }}
                      />
                      <Line type="monotone" dataKey="games" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ fill: 'hsl(var(--primary))' }} name="Games" />
                      <Line type="monotone" dataKey="signups" stroke="hsl(var(--chart-2))" strokeWidth={2} dot={{ fill: 'hsl(var(--chart-2))' }} name="Signups" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Conversion Rate */}
            <Card>
              <CardHeader>
                <CardTitle>Conversion Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Game Completion Rate</p>
                    <p className="text-2xl font-bold">
                      {q1Count > 0 ? Math.round((getEventCount('game_completed') / q1Count) * 100) : 0}%
                    </p>
                    <p className="text-xs text-muted-foreground">Players who finished all 3 questions</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Signup Conversion</p>
                    <p className="text-2xl font-bold">
                      {getEventCount('game_completed') > 0 ? Math.round((getEventCount('signup_completed') / getEventCount('game_completed')) * 100) : 0}%
                    </p>
                    <p className="text-xs text-muted-foreground">Completed games → signups</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Leaderboard Engagement</p>
                    <p className="text-2xl font-bold">
                      {getEventCount('game_completed') > 0 ? Math.round((getEventCount('leaderboard_viewed') / getEventCount('game_completed')) * 100) : 0}%
                    </p>
                    <p className="text-xs text-muted-foreground">Completed games → leaderboard views</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}