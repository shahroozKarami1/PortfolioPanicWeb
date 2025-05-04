import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { CustomButtonPlay, FooterMainMenu, MainMenuCardWrapper, MainMenuWrapper } from '@/Elements/ElementCustom';
import { Box, Grid, Typography } from '@mui/material';
import MainMenuBtn from './MainMenuComps/MainMenuBtn';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import HowToWinText from './MainMenuComps/HowToWinText';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
const MainMenu = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    // Check authentication status
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
      if (session?.user) {
        setUsername(session.user.user_metadata?.username || '');
      }
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setIsAuthenticated(!!session);
      if (session?.user) {
        setUsername(session.user.user_metadata?.username || '');
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Signed out successfully",
        description: "You have been signed out of your account.",
        duration: 3000,
      });
    } catch (error) {
      console.error('Error signing out:', error);
      toast({
        title: "Sign out failed",
        description: "An error occurred while signing out. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <MainMenuWrapper>
      <MainMenuCardWrapper>
        <Box sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <Typography sx={{
            fontSize: "2.2rem",
            fontWeight : 'bold' ,  
            textAlign: "center",


          }}>PORTFOLIO PANIC

          </Typography>
          <SportsEsportsIcon sx={{
            fontSize: "5rem",
            transform: "rotate(45deg)",
            color: "var(--white-color)",
          }} />
        </Box>
        <Typography sx={{
          fontSize: "1.1rem",
          textAlign: "center",
        }}>Master the market before time runs out !</Typography>
        <Grid container spacing={2}>
          <Grid size={6}>
            <MainMenuBtn icon={<QuestionMarkIcon />} text="How to Play" href="/auth" />
            <MainMenuBtn icon={<EmojiEventsIcon />} text="Achivments" href="/auth" />
          </Grid>
          <Grid size={6}>
            <MainMenuBtn icon={<StarIcon />} text="Leaderboard" href="/auth" />
            <MainMenuBtn icon={<VpnKeyIcon />} text="Sign In" href="/auth" />
          </Grid>
        </Grid>
        <CustomButtonPlay sx={{
          width: "100%",

        }}>Play</CustomButtonPlay>
        <FooterMainMenu>
          <Typography sx={{
            fontSize: "1.3rem",
            fontWeight: 'bold',
            textAlign: "center",
            paddingY: "0.80rem"
          }} >How to Win</Typography>
          <HowToWinText text='Buy low, sell high to maximize portfolio value' />
          <HowToWinText text='Pay attention to market news for trading opportunities' />
          <HowToWinText text='Buy low, sell high to maximize portfolio value' />
          <HowToWinText text='Diversify your investments to minimize risk' />
          <HowToWinText text='Complete all 10 rounds with maximum profits' />
        </FooterMainMenu>

      </MainMenuCardWrapper>

    </MainMenuWrapper>
  );
};

export default MainMenu;
