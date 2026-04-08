import { motion } from "framer-motion";
import styled from "styled-components";
import { Container, SectionTitle } from "../styles/globalStyles";

const container = {
  hidden: { opacity: 0, y: 160 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delayChildren: 0.25, staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const communityWork = [
  {
    title: "FOSS United Lucknow",
    role: "Core Team Organiser",
    timeframe: "2023 — Present",
    icon: "FossUnitedLucknow",
    highlights: [
      "Organising monthly meetups and the annual Lucknow FOSS conference.",
      "Run Linux install-fests and help onboard first-time open-source contributors.",
      "Mentor students on open-source project contributions and FOSS advocacy.",
      `Promote open-source culture in local colleges through workshops, talks, and hackathons.`,
    ],
  },
  {
    title: "Google Developer Students Club",
    role: "Co-Lead, BBDNIIT",
    timeframe: "2022 — 2023",
    icon: "GDSC",
    highlights: [
      "Co-led campus chapter; planned and executed the yearly program with core team members.",
      "Organized Google DevFest, Google WOW, Compose Camp, and multiple hands-on events.",
      "Guided student teams on project scope, live demos, and shipping within event timelines.",
      "Gave sessions on web development, android development and Ui/UX design.",
    ],
  },
];

const Community = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 160 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <SectionTitle>Community Work</SectionTitle>
      </motion.div>

      <motion.section variants={container} initial="hidden" animate="visible">
        <CardGrid>
          {communityWork.map((itemData) => (
            <motion.div key={itemData.title} variants={item}>
              <Card>
                <CardHeader>
                  <Logo
                    src={`${process.env.PUBLIC_URL}/icons/${itemData.icon}.png`}
                    alt={`${itemData.title} logo`}
                    loading="lazy"
                  />
                  <HeaderText>
                    <h3>{itemData.title}</h3>
                    <small>{itemData.timeframe}</small>
                    <Role>{itemData.role}</Role>
                  </HeaderText>
                </CardHeader>

                <HighlightList>
                  {itemData.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </HighlightList>
              </Card>
            </motion.div>
          ))}
        </CardGrid>
      </motion.section>
    </Container>
  );
};

export default Community;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
  margin: 1.5em 0;
`;

const Card = styled.div`
  background: var(--bg-card);
  border-radius: 8px;
  padding: 1em;
  border: 1px solid rgba(255, 255, 255, 0.04);
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 0.75em;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75em;
`;

const Logo = styled.img`
  width: 64px;
  height: 64px;
  object-fit: contain;
  border-radius: 6px;
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15em;

  h3 {
    margin: 0;
    font-weight: 600;
  }

  small {
    opacity: 0.7;
  }
`;

const Role = styled.span`
  color: var(--link-active-color);
  font-weight: 500;
`;

const HighlightList = styled.ul`
  margin: 0;
  padding-left: 1.1em;
  color: var(--para-gray-color);

  li + li {
    margin-top: 0.35em;
  }
`;
