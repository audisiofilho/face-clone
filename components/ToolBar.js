import React from "react";
import styled from "styled-components/native";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Avatar from "./Avatar";
const user6 = require("../assets/user6.jpeg");

const Container = styled.View`
  width: 100%;
  height: 92px;
`;

const Row = styled.View`
  flex-direction: row;
  background: #ffffff;
  width: 100%;
  align-items: center;
  padding: 0 11px;
`;

const Input = styled.TextInput`
  height: 50px;
  width: 100%;
  padding: 0 8px;
`;

const Divider = styled.View`
  width: 100%;
  height: 0.5px;
  background: #f0f0f0;
`;

const Menu = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 42px;
`;

const MenuText = styled.Text`
  padding: 11px;
  font-weight: 500;
  font-size: 12px;
`;

const Separator = styled.View`
  width: 1px;
  height: 26px;
  background: #f0f0f0;
`;
const ToolBar = () => {
  return (
    <Container>
      <Row>
        <Avatar source={user6} />
        <Input placeholder="O que você está pensando?" />
      </Row>

      <Divider />

      <Row>
        <Menu>
          <Ionicons name="ios-videocam" size={22} color="#f44" />
          <MenuText>Ao Vivo</MenuText>
        </Menu>

        <Separator />

        <Menu>
          <MaterialIcons
            name="photo-size-select-actual"
            size={20}
            color="#acaf50"
          />
          <MenuText>Fotos</MenuText>
        </Menu>

        <Separator />

        <Menu>
          <MaterialCommunityIcons name="video-plus" size={22} color="#e141fc" />
          <MenuText>Sala</MenuText>
        </Menu>
      </Row>
    </Container>
  );
};

export default ToolBar;
