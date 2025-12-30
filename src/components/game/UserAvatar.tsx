import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User } from "lucide-react";

export const UserAvatar = () => {
  const { user, signOut } = useAuth();

  if (!user) return null;

  const avatarUrl = user.user_metadata?.avatar_url;
  const email = user.email;
  const initials = email ? email.charAt(0).toUpperCase() : 'U';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-full">
          <Avatar className="w-8 h-8 cursor-pointer hover:ring-2 hover:ring-secondary transition-all">
            <AvatarImage src={avatarUrl} alt={email || 'User'} />
            <AvatarFallback className="bg-secondary text-secondary-foreground text-sm font-medium">
              {initials}
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem disabled className="text-muted-foreground">
          <User className="w-4 h-4 mr-2" />
          <span className="truncate">{email}</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => signOut()} className="text-destructive focus:text-destructive">
          <LogOut className="w-4 h-4 mr-2" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
