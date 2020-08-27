import React from 'react';

import {
  List,
  ChannelContainer,
  LeftSide,
  RightSide,
  Avatar,
  Column,
  Username,
  Info,
  WhiteCircle
} from './styles';

const ChannelList: React.FC = () => {
  const ChannelItem: React.FC = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Column>
          <Username>rocketseat_oficial</Username>
          <Info>36 news videos</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  );

  return (
    <List>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </List>
  );
};

export default ChannelList;
