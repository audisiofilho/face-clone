import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import Avatar from "./Avatar";
import { Entypo, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const Container = styled.View`
  flex: 1;
`;

const Header = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
  padding: 0 11px;
`;

const Row = styled.View`
  align-items: center;
  flex-direction: row;
`;

const User = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #222121;
`;

const Time = styled.Text`
  font-size: 12px;
  color: #747476;
`;

const Post = styled.Text`
  font-size: 14px;
  color: #222121;
  line-height: 16px;
  padding: 0 11px;
`;

const Foto = styled.Image`
  margin-top: 9px;
  width: 100%;
  height: 300px;
`;

const Footer = styled.View`
  padding: 0 11px;
`;

const FooterCount = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 9px 0;
`;

const IconCount = styled.View`
  background: #1878f3;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
`;

const TextCount = styled.Text`
  font-size: 11px;
  color: #424040;
`;

const Separator = styled.View`
  width: 100%;
  height: 1;
  background: #f9f9f9;
`;

const FooterMenu = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 9px 0;
`;

const Button = styled.TouchableOpacity`
  flex-direction: row;
`;

const Icon = styled.View`
  margin-right: 6px;
`;

const Text = styled.Text`
  font-size: 12px;
  color: #424040;
`;

const BottonDivider = styled.View`
  width: 100%;
  height: 9px;
  background: #f0f2f5;
`;

const Feed = () => {
  return (
    <>
      <Container>
        <Header>
          <Row>
            <Avatar source={require("../assets/user6.jpeg")} />
          </Row>
          <View style={{ marginRight: 185 }}>
            <User>Audisio Filho</User>
            <Row>
              <Time>18m</Time>
              <Entypo name="dot-single" size={14} color="#747476" />
              <Entypo name="globe" size={12} color="#747476" />
            </Row>
          </View>
          <Entypo name="dots-three-horizontal" size={15} color="#222121" />
        </Header>
        <Post>Lorem ipsum dolor sit amet consectetur adipisi akjsdkjasdkjadsapsjd asijdaijsdasd asdjanjajsdasao</Post>
        <Foto source={require('../assets/post1.jpg')}/>
        <Footer>
            <FooterCount>
                <Row>
                    <IconCount>
                       <AntDesign name="like1" size={12} color="#ffffff" />
                    </IconCount>
                    <TextCount>225 curtidas</TextCount>
                </Row>
                <TextCount>130 comentários</TextCount>
                <TextCount>59 compartilhamentos</TextCount>
            </FooterCount>

            <Separator/>
            <FooterMenu>
                <Button>
                    <Icon>
                        <AntDesign name="like2" size={20} color="424040" />
                    </Icon>
                    <Text>Curtir</Text>
                </Button>

                <Button>
                    <Icon>
                        <MaterialCommunityIcons name="comment-outline" size={20} color="424040" />
                    </Icon>
                    <Text>Comentar</Text>
                </Button>

                <Button>
                    <Icon>
                        <MaterialCommunityIcons name="share-outline" size={20} color="424040" />
                    </Icon>
                    <Text>Compartilhar</Text>
                </Button>
            </FooterMenu>
        </Footer>
        <BottonDivider/>
      </Container>

      <Container>
        <Header>
          <Row>
            <Avatar source={require("../assets/user3.jpg")} />
          </Row>
          <View style={{ marginRight: 185 }}>
            <User>Christian Castro</User>
            <Row>
              <Time>18h</Time>
              <Entypo name="dot-single" size={14} color="#747476" />
              <Entypo name="globe" size={12} color="#747476" />
            </Row>
          </View>
          <Entypo name="dots-three-horizontal" size={15} color="#222121" />
        </Header>
        <Post>Lorem ipsum dolor sit amet consectetur adipisi akjsdkjasdkjadsapsjd asijdaijsdasd asdjanjajsdasao</Post>
        <Foto source={require('../assets/post2.jpg')}/>
        <Footer>
            <FooterCount>
                <Row>
                    <IconCount>
                       <AntDesign name="like1" size={12} color="#ffffff" />
                    </IconCount>
                    <TextCount>409 curtidas</TextCount>
                </Row>
                <TextCount>160 comentários</TextCount>
                <TextCount>89 compartilhamentos</TextCount>
            </FooterCount>

            <Separator/>
            <FooterMenu>
                <Button>
                    <Icon>
                        <AntDesign name="like2" size={20} color="424040" />
                    </Icon>
                    <Text>Curtir</Text>
                </Button>

                <Button>
                    <Icon>
                        <MaterialCommunityIcons name="comment-outline" size={20} color="424040" />
                    </Icon>
                    <Text>Comentar</Text>
                </Button>

                <Button>
                    <Icon>
                        <MaterialCommunityIcons name="share-outline" size={20} color="424040" />
                    </Icon>
                    <Text>Compartilhar</Text>
                </Button>
            </FooterMenu>
        </Footer>
        <BottonDivider/>
      </Container>

      <Container>
        <Header>
          <Row>
            <Avatar source={require("../assets/user2.jpg")} />
          </Row>
          <View style={{ marginRight: 185 }}>
            <User>Bruna Almeida</User>
            <Row>
              <Time>20m</Time>
              <Entypo name="dot-single" size={14} color="#747476" />
              <Entypo name="globe" size={12} color="#747476" />
            </Row>
          </View>
          <Entypo name="dots-three-horizontal" size={15} color="#222121" />
        </Header>
        <Post>Lorem ipsum dolor sit amet consectetur adipisi akjsdkjasdkjadsapsjd asijdaijsdasd asdjanjajsdasao</Post>
        <Foto source={require('../assets/user4.jpg')}/>
        <Footer>
            <FooterCount>
                <Row>
                    <IconCount>
                       <AntDesign name="like1" size={12} color="#ffffff" />
                    </IconCount>
                    <TextCount>505 curtidas</TextCount>
                </Row>
                <TextCount>490 comentários</TextCount>
                <TextCount>149 compartilhamentos</TextCount>
            </FooterCount>

            <Separator/>
            <FooterMenu>
                <Button>
                    <Icon>
                        <AntDesign name="like2" size={20} color="424040" />
                    </Icon>
                    <Text>Curtir</Text>
                </Button>

                <Button>
                    <Icon>
                        <MaterialCommunityIcons name="comment-outline" size={20} color="424040" />
                    </Icon>
                    <Text>Comentar</Text>
                </Button>

                <Button>
                    <Icon>
                        <MaterialCommunityIcons name="share-outline" size={20} color="424040" />
                    </Icon>
                    <Text>Compartilhar</Text>
                </Button>
            </FooterMenu>
        </Footer>
        <BottonDivider/>
      </Container>
    </>
  );
};

export default Feed;
