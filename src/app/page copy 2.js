import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen">
      <header className="lg:h-21.25 sticky top-0 z-999 flex items-center justify-between w-screen">
        {/* Header content on Large (1024px) breakpoints */}
        <aside className="flex items-center justify-center lg:block | hidden">
          <Image src={'https://cfcdn.apowersoft.info/astro/picwish/_astro/logo-en.9dfbfa39.svg'} alt="company-logo" width={'0'} height={'0'} className="w-2.5"></Image>
        </aside>
        <aside className="flex items-center justify-center lg:block | hidden">
          <a className="no-underline text-center">Login</a>
          <a className="no-underline text-center text-white rounded-2xl bg-blue-600">Sign up</a>
        </aside>

        {/* Header content on smaller (1024px >) breakpoints */}
        <aside className="lg:hidden | block"></aside>
      </header>
      <main></main>
      <footer></footer>
    </main>
  );
}
