import React, { FC } from "react";
import { useSelector } from "react-redux";
import { IState } from "../../reducers";
import { IUsersPhotosReducer } from "../../reducers/usersPhotosReducers";
import SliderBox from "./SliderBox/SliderBox";
import Theme from "../../styledHelpers/Theme";
import { CustomSlider, Title, TopBar, Wrapper } from "./WorkspacesStyle";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

export const Workspaces: FC = () => {
  const { usersPhotosList } = useSelector<IState, IUsersPhotosReducer>(
    (globalState) => ({
      ...globalState.usersPhotosList,
    })
  );

  const workspaces = [
    {
      bgImgLink: usersPhotosList[Math.floor(Math.random() * 100)]?.url,
      title: "Client contract",
      category: "Contract",
      categoryImg: Theme.Icons.contract,
      usersNumber: 150,
      lastUpdate: "2 days",
    },
    {
      bgImgLink: usersPhotosList[Math.floor(Math.random() * 100)]?.url,
      title: "Supplier contract",
      category: "Contract",
      categoryImg: Theme.Icons.contract,
      usersNumber: 25,
      lastUpdate: "3 days",
    },
    {
      bgImgLink: usersPhotosList[Math.floor(Math.random() * 100)]?.url,
      title: "Corporate",
      category: "Contract",
      categoryImg: Theme.Icons.entities,
      usersNumber: 24,
      lastUpdate: "2 days",
    },
    {
      bgImgLink: usersPhotosList[Math.floor(Math.random() * 100)]?.url,
      title: "Client contract",
      category: "Contract",
      categoryImg: Theme.Icons.contract,
      usersNumber: 150,
      lastUpdate: "2 days",
    },
    {
      bgImgLink: usersPhotosList[Math.floor(Math.random() * 100)]?.url,
      title: "Client contract",
      category: "Contract",
      categoryImg: Theme.Icons.contract,
      usersNumber: 150,
      lastUpdate: "2 days",
    },
  ];

  return (
    <Wrapper>
      <TopBar>
        <Title>Workspaces</Title>
      </TopBar>
      <CustomSlider {...settings}>
        {workspaces.map((workspace) => (
          <SliderBox
            bgImg={workspace.bgImgLink}
            title={workspace.title}
            category={workspace.category}
            categoryImg={workspace.categoryImg}
            usersNumber={workspace.usersNumber}
            lastUpdate={workspace.lastUpdate}
          />
        ))}
      </CustomSlider>
    </Wrapper>
  );
};

export default Workspaces;
