import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Section } from "../../styles/styles";
import { breakpoints, defaultTheme } from "../../styles/themes/default";

const FeaturedCardWrapper = styled.div`
  height: 380px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.4);

  .feat-card-content {
    padding: 60px 28px;
    position: absolute;
    top: 0;
    left: 0;
    max-width: 400px;

    @media (max-width: ${breakpoints.sm}) {
      padding: 16px;
    }
  }

  .feat-card-img {
    object-position: 93px 90px;
    scale: 2;

    @media (max-width: ${breakpoints.xl}) {
      object-position: 73px 90px;
    }

    @media (max-width: ${breakpoints.sm}) {
      object-position: 0px 90px;
    }
  }

  .feat-link {
    position: relative;
    &::after {
      position: absolute;
      content: "";
      left: 0;
      top: 100%;
      height: 1px;
      width: 100%;
      background-color: ${defaultTheme.color_white};
    }
  }
`;

const StatisticsSection = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 20px;
  margin-top: 50px; /* Adjust the margin as needed */
`;

const StatCard = styled.div`
  flex: 1;
  margin: 0 10px;
  background-color: white; /* Optional: Add background color */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Add a shadow effect */
`;

const StatTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const StatNumber = styled.p`
  font-size: 48px;
  font-weight: bold;
  color: #007bff; /* Blue color */
  margin-bottom: 10px;
`;

const StatDesc = styled.p`
  font-size: 14px;
  color: #d0a089; /* Light brown color */
  text-transform: uppercase;
`;

const Highlight = styled.span`
  background-color: #007bff;
  color: white;
  padding: 2px 5px;
  font-weight: bold;
  text-transform: uppercase;
`;

const HappyCustomers = () => {
  const [happyClients, setHappyClients] = useState(0);
  const [finishedProjects, setFinishedProjects] = useState(0);
  const [skilledExperts, setSkilledExperts] = useState(0);
  const [mediaPosts, setMediaPosts] = useState(0);

  useEffect(() => {
    const animateNumbers = (setter, targetValue) => {
      let count = 0;
      const increment = Math.ceil(targetValue / 100); // Increment by a fraction of the target

      const interval = setInterval(() => {
        count += increment;
        if (count >= targetValue) {
          count = targetValue; // Ensure it doesn't exceed the target
          clearInterval(interval);
        }
        setter(count);
      }, 50); // Adjust the timing as needed
    };

    animateNumbers(setHappyClients, 20000);
    animateNumbers(setFinishedProjects, 50);
    animateNumbers(setSkilledExperts, 5000);
    animateNumbers(setMediaPosts, 1997);
  }, []);

  return (
    <Section>
      <Container>
        <h1 style={{ textAlign: "center" }}> Customers Statistics </h1>
        <StatisticsSection>
          <StatCard>
            <StatTitle>Happy Clients</StatTitle>
            <StatNumber>{happyClients}+</StatNumber>
            <StatDesc>Successfully Work With</StatDesc>
          </StatCard>

          <StatCard>
            <StatTitle>Solar Projects</StatTitle>
            <StatNumber>{finishedProjects}+</StatNumber>
            <StatDesc>Successfully Completed</StatDesc>
          </StatCard>

          <StatCard>
            <StatTitle>Inverter/UPS Installations</StatTitle>
            <StatNumber>{skilledExperts}+</StatNumber>
            <StatDesc>Installed More Than</StatDesc>
          </StatCard>

          <StatCard>
            <StatTitle>Present Since</StatTitle>
            <StatNumber>{mediaPosts}</StatNumber>
            <StatDesc>
              <Highlight>Establishment</Highlight>
            </StatDesc>
          </StatCard>
        </StatisticsSection>
      </Container>
    </Section>
  );
};

export default HappyCustomers;
