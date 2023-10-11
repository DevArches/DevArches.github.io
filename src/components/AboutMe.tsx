import { Box, Stack, Typography } from '@mui/material';
import { typographyStyles } from '../styles';
import colors from '../colors';
const AboutMe = () => {
  function hexToRgb(hex: string): { r: number; g: number; b: number } {
    const bigint = parseInt(hex.replace('#', ''), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  }

  const purpleRgb = hexToRgb('#772fdb');
  return (
    <Stack>
      <Stack direction='row' spacing={2}>
        <Box>
          <Typography
            variant='h2'
            sx={{
              ...typographyStyles,
              color: colors.yellow,
              paddingBottom: '3rem',
            }}
          >
            About Me
          </Typography>
          <Typography
            variant='h5'
            sx={{ ...typographyStyles, color: colors.primary }}
          >
            Hello, my name is Ryan and I enjoy building things for the web. I
            started my journey as a developer in 2020 and have been learning
            ever since.
            <br />I am currently working on projects with React, TypeScript, and
            Node.js. As well as expanding my knowledge in GO to build a backend
            for my projects. Some of my other interests include music, gaming,
            and cooking.
          </Typography>
        </Box>
        <Box
          sx={{
            width: 400,
            height: 400,
            position: 'relative',
          }}
        >
          <img
            src='/images/me.png'
            alt='Ryan Coulson'
            width='400'
            height='400'
            style={{ borderRadius: '4px' }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '4px',
              backgroundColor: `rgba(${purpleRgb.r}, ${purpleRgb.g}, ${purpleRgb.b}, 0.3)`,
            }}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default AboutMe;
