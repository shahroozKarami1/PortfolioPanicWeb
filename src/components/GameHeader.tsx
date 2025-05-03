
import React from 'react';
import { Bell } from 'lucide-react';
import { Badge } from './ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { toast } from '@/hooks/use-toast';
import { useGame } from '../contexts/GameContext';
import { SettingsDialog } from './settings/SettingsDialog';

const GameHeader = () => {
  const { state } = useGame();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0F172A]/80 backdrop-blur-xl transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-default">
            PORTFOLIO PANIC
          </h1>
          <Badge 
            variant="outline" 
            className="bg-orange-500/20 text-orange-400 border-orange-500/50 px-3 py-1 text-sm animate-pulse"
          >
            Round {state.round}/10
          </Badge>
        </div>
        <div className="flex items-center gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Bell 
                  className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition-colors hover:scale-110 transform" 
                  onClick={() => {
                    toast({
                      title: "Notifications",
                      description: "All notifications are currently shown in the news panel",
                      duration: 3000
                    });
                  }}
                />
              </TooltipTrigger>
              <TooltipContent className="bg-[#1A1F2C] border border-white/10">
                <p>Notifications</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <SettingsDialog />
        </div>
      </div>
    </header>
  );
};

export default GameHeader;
