import ProjectItem from "./ProjectItem";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function SectionProjects() {
  return (
    <section>
      <>
        <div className="container mx-auto pt-20 px-10 2xl:px-0" id="projects">
          <SectionTitle>Projects</SectionTitle>
          <SectionParagraph>Beberapa proyek bikinan saya.</SectionParagraph>
          <div className="flex -mx-4 flex-wrap mt-20">
            <div className="md:w-6/12 w-full px-4 pb-8">
              <ProjectItem
                name="Husten"
                desctiption="Explorasi landing page"
                image="/project.webp"
              />
            </div>
            <div className="md:w-6/12 w-full px-4 pb8">
              <ProjectItem
                name="Resources"
                desctiption="Explorasi resource page"
                image="/project2.webp"
              />
            </div>
            <div className="md:w-6/12 w-full px-4 pb-8 md:pb-0">
              <ProjectItem
                name="Resources"
                desctiption="Explorasi resource page"
                image="/project2.webp"
              />
            </div>
            <div className="md:w-6/12 w-full px-4">
              <ProjectItem
                name="Husten"
                desctiption="Explorasi landing page"
                image="/project.webp"
              />
            </div>
          </div>
        </div>
      </>
    </section>
  );
}
