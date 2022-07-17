import Button from "../components/Button";
import NavBar from "../components/NavBar";

export default function Hero() {
  return (
    <div className="bg-hero  2xl:h-[678px] xl:h-[600px] lg:h-[480px] md:h-[490px] pb-20">
      <div className="container mx-auto px-10 2xl:px-0">
        <NavBar></NavBar>
        <div className="text-center xl:mt-20 md:mt-1">
          <h1 className="text-white text-3xl font-semibold font-mono 2xl:w-6/12 xl:w-8/12 lg:w-10/12 mx-auto leading-relaxed">
            Saya seorang mahasiswa, berawal dari bahasa pemrograman suka
            jalan-jalan kemana-mana
          </h1>
          <p className="text-white text-opacity-60 text-lg 2xl:3/12 xl:w-5/12 lg:w-6/12 mx-auto mt-6 leading-relaxed">
            Sejak SMK kelas 2 saya mulai belajar dunia pemrograman. Dimulai dari
            belajar website, mobile, hingga dekstop.{" "}
          </p>
          <Button href="#profile" className="mt-14" variant="fill-yellow" pill>
            Pelajari
          </Button>
        </div>
      </div>
    </div>
  );
}
