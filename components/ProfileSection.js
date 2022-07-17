import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";

export default function Profile() {
  return (
    <section className="py-28" id="profile">
      <div className="container mx-auto px-10 2xl:px-0">
        <SectionTitle>Profile</SectionTitle>
        <SectionParagraph> Mengenal saya secara singkat</SectionParagraph>
        <div className="flex lg:items-center md:items-start flex-wrap xl:w-9/12 mx-auto mt-10">
          <div className="md:w-5/12  w-full p-10 mb-10 md:mb-0">
            <img src="/profile.png" className="w-full" />
          </div>
          <div className="md:w-7/12 w-full px-10">
            <p className="text-lg leading-relaxed">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas
            </p>
            <p className="text-lg mt-6  leading-relaxed  ">
              assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
              et aut officiis debitis aut rerum necessitatibus saepe eveniet ut
              et voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
