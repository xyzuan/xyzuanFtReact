import styled from "@mui/material/styles/styled";
import LinearProgress, {
  linearProgressClasses,
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import { useTheme } from "next-themes";

interface StyledBorderLinearProgressProps extends LinearProgressProps {
  value: number;
}

const BorderLinearProgress = styled(
  LinearProgress
)<StyledBorderLinearProgressProps>(({ value }) => {
  const { theme } = useTheme();

  const backgroundColor = theme === "dark" ? "#212121" : "lightGray";
  const barColor = theme === "dark" ? "#000000" : "#FFFFFF";
  return {
    height: 8,
    borderRadius: 99,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor,
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 99,
      backgroundColor: barColor,
    },
  };
});

export default BorderLinearProgress;
