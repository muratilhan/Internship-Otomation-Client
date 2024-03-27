import { useMemo } from 'react';

// material-ui
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// project import
import Typography from './typography';
import { useSelector } from 'react-redux';

export default function ThemeCustomization({ children }) {
  const appStore = useSelector((state) => state.app);
  const mode = appStore.theme || 'light';
  // const theme = Palette(mode);
  const theme = mode;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const themeTypography = Typography(`'Public Sans', sans-serif`);
  // const themeCustomShadows = useMemo(() => CustomShadows(theme), [theme]);

  const themeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1536,
        },
      },
      direction: 'ltr',
      //   mixins: {
      //     toolbar: {
      //       minHeight: 60,
      //       paddingTop: 8,
      //       paddingBottom: 8,
      //     },
      //   },
      palette: theme.palette,
      // customShadows: themeCustomShadows,
      typography: themeTypography,
    }),
    [theme, themeTypography],
  );

  const themes = createTheme(themeOptions);
  // For components overrides
  // themes.components = componentsOverride(themes);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
