import Slider from "react-slick";
import styled from "styled-components";
import Theme from "../../styledHelpers/Theme";

export const Wrapper = styled.div`
  margin-top: 2rem;
`;
export const TopBar = styled.div`
  color: white;
`;
export const Title = styled.h3`
  color: ${Theme.Colors.red};
`;

export const CustomSlider = styled(Slider)`
  max-width: calc(70vw * 0.93);
`;