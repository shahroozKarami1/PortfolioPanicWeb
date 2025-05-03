import { AchievementType } from '../AchievementBadge';
import PerformanceChart from '../PerformanceChart';
import AchievementBadge from '../AchievementBadge';
import { NetWorthHistoryEntry } from '@/types/game';
import { HelpCircle, DollarSign, TrendingUp } from 'lucide-react';
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface PerformanceSectionProps {
  netWorthHistory: NetWorthHistoryEntry[];
  hasFirstTrade: boolean;
  hasDoubledPortfolio: boolean;
  isDiversified: boolean;
  height?: number;
}

const PerformanceSection = ({ 
  netWorthHistory,
  hasFirstTrade,
  hasDoubledPortfolio,
  isDiversified,
  height = 250
}: PerformanceSectionProps) => {
  return (
    <div className="mt-6 p-4 bg-panel/30 rounded-lg border border-panel-light/30">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <TrendingUp size={16} className="mr-2 text-gray-400" />
          <h3 className="text-sm text-gray-300 font-medium">Portfolio Performance</h3>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <HelpCircle size={14} className="ml-1 text-gray-500 cursor-help" />
              </TooltipTrigger>
              <TooltipContent side="top" className="bg-dark border-highlight w-60">
                <p className="text-xs">Chart shows your portfolio value over time. Higher amplitude indicates more significant changes.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        {/* Achievements row */}
        <div className="flex space-x-2">
          <AchievementBadge type="first-trade" unlocked={hasFirstTrade} size="sm" />
          <AchievementBadge type="doubled-portfolio" unlocked={hasDoubledPortfolio} size="sm" />
          <AchievementBadge type="diversified" unlocked={isDiversified} size="sm" />
        </div>
      </div>
      <PerformanceChart data={netWorthHistory} height={height} />
    </div>
  );
};

export default PerformanceSection;
