import React from "react";
import styled from "styled-components";

const TeamMemberContainer = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 24px 24px;
  border-radius: 0px;
  gap: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    border: 1px solid ${({ theme }) => theme.textSoft};
  }
    @media (max-width: 925px) {
        width: 300px;
        }
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
`;

const TeamMemberData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 4px;
`;

const TeamMemberPhoto = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #282D45;
  object-fit: cover;
`;

const TeamMemberName = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #FFFFFF;
`;

const TeamMemberTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.soft2 + '99'};
`;

const TeamMemberBio = styled.p`
    font-size: 16px;
    line-height: 1.5;
  color: ${({ theme }) => theme.soft2};
`;

const TeamMember = ({ photo, name, title, bio }) => {
    return (
        <TeamMemberContainer>
            <Header>
                <TeamMemberPhoto src={photo} alt={name} />
                <TeamMemberData>
                    <TeamMemberName>{name}</TeamMemberName>
                    <TeamMemberTitle>{title}</TeamMemberTitle>
                </TeamMemberData>
            </Header>
            <TeamMemberBio>{bio}</TeamMemberBio>
        </TeamMemberContainer>
    );
};

export default TeamMember;
