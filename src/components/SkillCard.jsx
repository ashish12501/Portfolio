import styled from 'styled-components';

const SkillCard = ({ title, icon }) => {
  const handleIconError = (event) => {
    const img = event.currentTarget;
    if (img.dataset.fallbackUsed) return;
    img.dataset.fallbackUsed = 'true';
    img.src = `${process.env.PUBLIC_URL}/icons/${icon}.png`;
  };

  return (
    <Skill>
      <SkillImage
        src={`${process.env.PUBLIC_URL}/icons/${icon}.svg`}
        alt={title}
        loading='lazy'
        onError={handleIconError}
      />
      <SkillTitle>{title}</SkillTitle>
    </Skill>
  );
};

export default SkillCard;

const Skill = styled.div``;

const SkillImage = styled.img`
  aspect-ratio: 1;
  max-width: 48px;
  margin: 0 auto;
`;

const SkillTitle = styled.h3`
  font-weight: 400;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;
