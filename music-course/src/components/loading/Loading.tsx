import { Backdrop, CircularProgress } from '@mui/material';
import styled from 'styled-components';

type Props = {
  open?: boolean; //true: show -- flase: hide
};

const Loading = ({ open = false }: Props) => {
  return (
    <Wrapper open={open}>
      <CircularProgress color="inherit" />
    </Wrapper>
  );
};

const Wrapper = styled(Backdrop)`
  z-index: 1500;
  .MuiCircularProgress-svg {
    color: #fff;
    z-index: 1500;
  }
`;
export default Loading;
