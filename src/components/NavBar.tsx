import { IconButton, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import colors from '../colors';
const stackStyles = {
  position: 'fixed',
  bottom: '0',
  left: '0',
  backgroundColor: 'transparent',
  padding: '1rem',
  borderRadius: '1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};
const NavBar = () => {
  return (
    <Stack
      alignItems='flex-start'
      justifyContent='center'
      direction={'column'}
      sx={stackStyles}
    >
      <IconButton
        href='https://www.linkedin.com/in/ryanjcoulson/'
        target='_blank'
        sx={{ color: colors.primary }}
      >
        <LinkedInIcon sx={{ fontSize: '3rem' }} />
      </IconButton>
      <IconButton
        href='https://github.com/DevArches'
        target='_blank'
        sx={{ color: colors.primary }}
      >
        <GitHubIcon sx={{ fontSize: '3rem' }} />
      </IconButton>
      <IconButton
        href='https://www.instagram.com/gaymingryan/'
        target='_blank'
        sx={{ color: colors.primary }}
      >
        <InstagramIcon sx={{ fontSize: '3rem' }} />
      </IconButton>
    </Stack>
  );
};

export default NavBar;
