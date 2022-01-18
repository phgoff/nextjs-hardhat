import Head, { MetaProps } from "./Head";
import NavBar from "./NavBar";

interface LayoutProps {
  children: React.ReactNode;
  customMeta?: MetaProps;
}

export default function Layout({
  children,
  customMeta,
}: LayoutProps): JSX.Element {
  return (
    <>
      <Head customMeta={customMeta} />
      <div className="relative min-h-screen overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl">
          <NavBar />
          <main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:px-8 xl:mt-20">
            {children}
          </main>
        </div>
      </div>
      <footer className="flex items-center justify-center h-12 font-bold text-white bg-indigo-500">
        Footer
      </footer>
    </>
  );
}
