import React from "react";

import {
	MaterialIcons,
	MaterialCommunityIcons,
	AntDesign,
} from "@expo/vector-icons";

import {
	Container,
	Header,
	Title,
	NavContainer,
	NavButton,
	NavTitle,
	Card,
	CardHeader,
	Avatar,
	Description,
	Bold,
	CardBody,
	UserName,
	CardFooter,
	Details,
	Value,
	Divider,
	DateLabel,
	Actions,
	Option,
	OptionLabel,
} from "./styles";

import avatar from "../../assets/images/avatar.png";

export default function Activities() {
	return (
		<Container>
			<Header>
				<Title>Atividades</Title>
				<NavContainer>
					<NavButton>
						<NavTitle>Todos</NavTitle>
					</NavButton>
					<NavButton>
						<NavTitle>Minhas</NavTitle>
					</NavButton>
				</NavContainer>
			</Header>

			<Card>
				<CardHeader>
					<Avatar source={avatar} />
					<Description>
						<Bold>Você</Bold> pagou a <Bold>@jhowpaes</Bold>
					</Description>
				</CardHeader>
				<CardBody>
					<UserName>Jhow Paes</UserName>
				</CardBody>
				<CardFooter>
					<Details>
						<Value>R$ 18,00</Value>
						<Divider />
						<MaterialIcons name="lock-outline" size={14} color="#fff" />
						<DateLabel>há 2 anos</DateLabel>
					</Details>
					<Actions>
						<Option>
							<MaterialCommunityIcons
								name="comment-outline"
								size={14}
								color="#fff"
							/>
							<OptionLabel>0</OptionLabel>
						</Option>
						<Option>
							<AntDesign name="hearto" size={14} color="#fff" />
							<OptionLabel>0</OptionLabel>
						</Option>
					</Actions>
				</CardFooter>
			</Card>
		</Container>
	);
}
