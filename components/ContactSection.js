import ContactItem from "./ContactItem";
import Field from "./Field";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

export default function ContactSection() {
  return (
    <>
      <section className="container mx-auto mt-20 px-10 2xl:px-0" id="contact">
        <div className="bg-primarygray md:p-14 p-2 flex rounded-lg flex-wrap">
          <div className="md:w-6/12 w-full md:border-r border-b border-primarygray-200">
            <div className="lg:py-16 lg:px-20 md:p-10 p-8">
              <SectionTitle left>Contact</SectionTitle>
              <SectionParagraph left>
                Beberapa cara menghubungi saya.
              </SectionParagraph>
              <ContactItem
                label="Mail"
                icon="/mail.svg"
                value="atafriski27@gmail.com"
                className="mt-10"
              />

              <ContactItem
                label="LinkedIn"
                icon="/linked.svg"
                value="attafriski"
                className="mt-6"
              />

              <ContactItem
                label="Instagram"
                icon="/instagram1.svg"
                value="@attafriskipr"
                className="mt-6"
              />

              <ContactItem
                label="Phone"
                icon="/phone.svg"
                value="085600088322"
                className="mt-6"
              />
            </div>
          </div>
          <div className="md:w-6/12 w-full">
            <form className="lg:py-16 lg:px-20 md:p-10">
              <div className="flex flex-wrap -mx-4">
                <div className="lg:w-6/12 px-4">
                  <Field label="Name" name="Name" type="text" />
                </div>
                <div className="lg:w-6/12 px-4">
                  <Field label="Email" name="Email" type="text" />
                </div>
              </div>
              <Field label="Subject" name="Subject" type="text" />
              <Field
                label="Message"
                name="Message"
                type="textarea"
                className="h-40"
              />
              <div className="text-right">
                <Button variant="black">Send</Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
