// react components.
import Header from "@/components/header/Header";
import Sidebar from "@/components/movies/Sidebar";
import Footer from "@/components/footer/Footer";

const MoviesLayout = ({ modal, children, params: { lang } }) => {
  return (
    <>
      <Header lang={lang} />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar lang={lang} />
          {children}
        </div>
        {modal}
      </main>
      <Footer lang={lang} />
    </>
  );
};

export default MoviesLayout;
