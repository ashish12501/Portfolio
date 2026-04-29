import styled from "styled-components";
import { Container, SectionTitle } from "../styles/globalStyles";
import { motion } from "framer-motion";

const promotions = [
  "Joined as Software Engineering Intern (Jan 2024 – June 2024)",
  "Promoted to Software Engineer (July 2024 – April 2025)",
  "Promoted to Software Engineer II (May 2025 – Currently)",
];

const contributions = [
  "Architected an end-to-end Document Management System featuring a custom E-Signature tool, a Git-style Contract Review System for version tracking, and WOPI protocol integration for native Microsoft Office editing.",
  "Developed a dynamic CPQ (Configure, Price, Quote) Calculator, allowing enterprise sales teams to dynamically configure products and generate automated quotes directly within the platform.",
  "Engineered scalable React.js applications for a SaaS Revenue Enablement Platform, implementing real-time features like live video/audio huddles, shared cursors, and multi-user interactions using WebSockets and WebRTC (Mediasoup).",
  "Built robust REST APIs using Node.js, Express, and MySQL to manage core deal data and power an analytics engine that tracks document engagement, user interactions, and activity timelines.",
  "Designed and implemented license management and role-based access control (RBAC) workflows to ensure secure multi-tenant data isolation and administrative efficiency.",
];

const Experience = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <SectionTitle>Experience</SectionTitle>

        <Card>
          <Header>
            <div>
              <Company>Revspire Technologies</Company>
              <Role>Software Engineer II</Role>
            </div>

            <Meta>
              <Dates>Jan 2024 – Currently</Dates>
              <Location>Bengaluru</Location>
            </Meta>
          </Header>

          <Subheading>Promotions</Subheading>
          <List>
            {promotions.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </List>

          <Subheading>Core Contributions</Subheading>
          <List>
            {contributions.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </List>
        </Card>
      </motion.div>
    </Container>
  );
};

export default Experience;

const Card = styled.div`
  margin-top: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Company = styled.h3`
  margin: 0;
  font-weight: 600;
`;

const Role = styled.p`
  margin: 0.15rem 0 0;
  opacity: 0.8;
  font-weight: 500;
`;

const Meta = styled.div`
  text-align: right;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const Dates = styled.p`
  margin: 0;
  font-weight: 500;
`;

const Location = styled.p`
  margin: 0.15rem 0 0;
  opacity: 0.8;
`;

const Subheading = styled.h4`
  margin: 1.25rem 0 0.5rem;
  font-weight: 600;
`;

const List = styled.ul`
  margin: 0;
  padding-left: 1.1rem;

  li {
    color: var(--para-gray-color);
    line-height: 1.6;
  }
`;
