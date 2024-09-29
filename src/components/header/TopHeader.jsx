import React from "react";
import styled from "styled-components";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: linear-gradient(135deg, #0077cc, #004b7f);
  border-radius: 0; /* No rounded corners to stretch full width */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  color: white;
  font-family: "Arial", sans-serif;
  font-size: 16px;
  width: 100%; /* Full width */
  margin: 0; /* Remove margin for full stretch */

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 15px;
  }
`;

const InfoItem = styled.p`
  margin: 0;
  padding: 0 10px;
  display: flex;
  align-items: center;

  &:first-child {
    font-weight: bold;
  }

  svg {
    margin-right: 8px;
  }
`;

const ContactNumber = styled.span`
  font-weight: bold;
  color: #ffdd57;
`;

const Divider = styled.div`
  width: 2px;
  height: 20px;
  background-color: #ffdd57;
  margin: 0 20px;
`;

const TopHeader = () => {
  return (
    <HeaderWrapper>
      <InfoItem>
        <FaEnvelope />
        Email:
        <a href="mailto:akulkarni417@gmail.com" style={{ color: "#FFDD57" }}>
          akulkarni417@gmail.com
        </a>
      </InfoItem>
      <InfoItem>
        <FaPhone />
        24/7 Service, Contact:
        <a href="tel:9822390717">
          <ContactNumber>9822390717</ContactNumber>
        </a>
      </InfoItem>
    </HeaderWrapper>
  );
};

export default TopHeader;
