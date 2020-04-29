import styled from "styled-components/native";

export const Header = styled.View`
	flex: 1;
	background: #1e222b;
	height: 40px;
	flex-direction: row;
	align-items: center;
	padding-left: 16px;
`;

export const Title = styled.Text`
	color: #fff;
	font-weight: bold;
	padding-right: 16px;
`;

export const Container = styled.ScrollView.attrs(() => ({
	horizontal: true,
	showsHorizontalScrollIndicator: false,
	contentContainerStyle: {
		alignItems: "center",
		paddingLeft: 16,
	},
}))`
	background: #1e222b;
	height: 130px;
`;

export const Options = styled.TouchableOpacity`
	width: 80px;
	margin-right: 16px;
	align-items: center;
`;

export const Img = styled.Image``;

export const Label = styled.Text`
	color: #fff;
	font-weight: bold;
	margin-top: 8px;
	font-size: 14px;
`;
