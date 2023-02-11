import { HeaderStyled, SectionStyled } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <SectionStyled>
    <HeaderStyled>
      {title}
      {extraHeaderContent}
    </HeaderStyled>
    <div>
      {body}
    </div>
  </SectionStyled>
);

export default Section;