import styled from "@mui/material/styles/styled";
import LinearProgress, {
  linearProgressClasses,
  LinearProgressProps,
} from "@mui/material/LinearProgress";

interface StyledBorderLinearProgressProps extends LinearProgressProps {
  value: number;
}

const BorderLinearProgress = styled(
  LinearProgress
)<StyledBorderLinearProgressProps>(({ theme, value }) => ({
  height: 8,
  borderRadius: 99,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#212121",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 99,
    backgroundColor: "white",
  },
}));

export default BorderLinearProgress;
