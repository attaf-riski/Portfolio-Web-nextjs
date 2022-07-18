import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

export default function SectionSkills() {
  return (
    <section className="py-28 bg-primarygray px-10 2xl:px-0" id="skills">
      <div className="container mx-auto">
        <SectionTitle>Skills</SectionTitle>
        <SectionParagraph>Beberapa kemampuan saya.</SectionParagraph>

        <div className="flex -mx-4 mt-20 flex-wrap p-8">
          <div className="md:w-4/12 w-full  px-4 pb-8">
            <SkillCard
              name="Javascript"
              level="Lanjutan"
              image="/javascript.png"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4  pb-8">
            <SkillCard
              name="React JS"
              level="Menengah"
              image="/react.png"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4  pb-8">
            <SkillCard
              name="Node JS"
              level="Lanjutan"
              image="/nodejs.png"
              imageClassName="h-16"
            />
          </div>

          <div className="md:w-4/12 w-full px-4  pb-8">
            <SkillCard
              name="Node JS"
              level="Lanjutan"
              image="/nodejs.png"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="Javascript"
              level="Lanjutan"
              image="/javascript.png"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4  pb-8">
            <SkillCard
              name="React JS"
              level="Menengah"
              image="/react.png"
              imageClassName="h-16"
            />
          </div>

          <div className="md:w-4/12 w-full px-4 md:pb-0 pb-8">
            <SkillCard
              name="React JS"
              level="Menengah"
              image="/react.png"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 md:pb-0 pb-8">
            <SkillCard
              name="Node JS"
              level="Lanjutan"
              image="/nodejs.png"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 md:pb-0 pb-8">
            <SkillCard
              name="Javascript"
              level="Lanjutan"
              image="/javascript.png"
              imageClassName="h-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
