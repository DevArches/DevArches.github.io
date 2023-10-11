import { Stack, Typography } from '@mui/material';
import colors from '../colors';
import { typographyStyles } from '../styles';

const Intro = () => {
  return (
    <Stack alignItems='flex-start' justifyContent='center'>
      <Typography
        paddingBottom={1}
        variant='h6'
        sx={{ ...typographyStyles, color: colors.green }}
      >
        Hi, My name is
      </Typography>
      <Typography variant='h1' sx={typographyStyles}>
        Ryan Coulson
      </Typography>
      <Typography variant='h2' sx={{ ...typographyStyles, color: colors.pink }}>
        I build things for the web
      </Typography>
      <Typography
        variant='h4'
        paddingTop={2}
        sx={{ ...typographyStyles, color: colors.purple }}
      >
        I'm a fontend deveveloper based in Hamburg Germany specializing in
        building exceptional websites, applications, and everything in between.
        Currently, I'm a deverloper at Qubidu GmbH focused on custom software
        solutions for the web.
      </Typography>
    </Stack>
  );
};
export default Intro;
