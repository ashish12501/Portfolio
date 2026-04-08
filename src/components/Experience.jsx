import styled from "styled-components";
import { Container, SectionTitle } from "../styles/globalStyles";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    company: "Revspire Technologies",
    role: "Senior Software Engineer",
    location: "Bengaluru, IN",
    fromDate: new Date("2024-07-01"),
    toDate: new Date(),
    present: true,
    tasks: [
      "Led React.js SaaS revenue enablement platform with real-time huddles, shared cursors, and multi-user collaboration using WebSockets/WebRTC.",
      "Architected a document management suite with custom e-signatures, Git-style contract review, and WOPI integration for native Office editing in browser.",
      "Built a dynamic CPQ calculator enabling product configuration, pricing, and quote generation inside the platform.",
      "Developed Node.js/Express APIs with MySQL powering analytics that track document engagement, user interactions, and activity timelines.",
    ],
  },
  {
    id: 2,
    company: "Revspire Technologies",
    role: "Software Engineering Intern",
    location: "Bengaluru, IN",
    fromDate: new Date("2024-01-01"),
    toDate: new Date("2024-06-30"),
    tasks: [
      "Developed an interactive user dashboard and comprehensive org settings to streamline onboarding and administration.",
      "Engineered license and permissions workflows to secure access control and role differentiation across the platform.",
      "Collaborated with product and backend teams to ship features quickly in a startup environment.",
    ],
  },
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Experience = () => {
  const monthDiff = (dateFrom, dateTo) => {
    return (
      dateTo.getMonth() -
      dateFrom.getMonth() +
      12 * (dateTo.getFullYear() - dateFrom.getFullYear())
    );
  };

  const formatDate = (date) =>
    `${months[date.getMonth()]} ${date.getFullYear()}`;

  const formatDuration = (totalMonths) => {
    const years = Math.floor(totalMonths / 12);
    const monthsLeft = totalMonths % 12;
    const parts = [];
    if (years) parts.push(`${years} ${years === 1 ? "Year" : "Years"}`);
    if (monthsLeft)
      parts.push(`${monthsLeft} ${monthsLeft === 1 ? "Month" : "Months"}`);
    if (!parts.length) parts.push("0 Months");
    return parts.join(" ");
  };

  const totalMonths = (() => {
    const earliestStart = data.reduce(
      (minDate, ex) =>
        ex.fromDate.getTime() < minDate.getTime() ? ex.fromDate : minDate,
      data[0].fromDate,
    );
    return monthDiff(earliestStart, new Date());
  })();

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <SectionTitle>Work Experience</SectionTitle>
        <TotalExp>{formatDuration(totalMonths)}</TotalExp>

        <TimeLine>
          {data
            .sort((a, b) => b.fromDate.getTime() - a.fromDate.getTime())
            .map((ex) => {
              const endDate = ex.present ? new Date() : ex.toDate;
              const durationMonths = monthDiff(ex.fromDate, endDate);

              return (
                <TimeLineItem key={ex.id}>
                  <ExperieceHeader>
                    <h3>
                      {ex.role}, {ex.company}
                    </h3>

                    <small>
                      {formatDate(ex.fromDate)} -{" "}
                      {ex.present ? "Present" : formatDate(ex.toDate)} (
                      {formatDuration(durationMonths)})
                    </small>
                  </ExperieceHeader>

                  {ex.location && <Location>{ex.location}</Location>}

                  <TaskList>
                    {ex.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </TaskList>
                </TimeLineItem>
              );
            })}
        </TimeLine>
      </motion.div>
    </Container>
  );
};

export default Experience;

const TimeLine = styled.ul`
  list-style-type: none;
  margin: 1em 0;
  padding: 1em;
`;

const TimeLineItem = styled.li`
  padding: 0 0 2em 2em;
  border-left: 1px solid var(--accent-blue);
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: -4px;
    left: -6px;
    padding: 4px;
    border-radius: 50%;
    background-color: var(--accent-blue);
    border: 2px solid var(--accent-blue);
  }

  p {
    opacity: 0.7;
  }

  ul {
    padding: 0 1em;
  }
`;

const ExperieceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  top: -10px;

  h3 {
    font-weight: 400;
  }

  small {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const Location = styled.p`
  margin: -0.25em 0 0.75em;
  opacity: 0.7;
`;

const TaskList = styled.ul`
  list-style-type: circle;

  li {
    color: var(--para-gray-color);
  }
`;

const TotalExp = styled.p`
  margin: 0.25em 0 1em;
  opacity: 0.7;
  font-weight: 500;
`;
