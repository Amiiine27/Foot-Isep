"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface HomeButtonProps {
  text: string;
  icon?: React.ReactNode;
  variant?: "default" | "outline" | "ghost" | "link" | "destructive";
  className?: string;
}

const HomeButton: React.FC<HomeButtonProps> = ({ text, icon, variant = "default", className }) => {
  const router = useRouter();

  return (
    <Button onClick={() => router.push("/")} variant={variant} className={`flex items-center gap-2 ${className}`}>
      {icon}
      {text}
    </Button>
  );
};

export default HomeButton;
