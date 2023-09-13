import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function useResponsive(query, start, end) {
  const theme = useTheme();

  if (query === "up") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useMediaQuery(theme.breakpoints.up(start));
  }

  if (query === "down") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useMediaQuery(theme.breakpoints.down(start));
  }

  if (query === "between") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useMediaQuery(theme.breakpoints.between(start, end));
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useMediaQuery(theme.breakpoints.only(start));
}

export function useWidth() {
  const theme = useTheme();

  const keys = [...theme.breakpoints.keys].reverse();

  const width = keys.find((key) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useMediaQuery(theme.breakpoints.up(key));
  });

  return width || "xs";
}
