import ThemeSwitch from "./_components/theme-switcher";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col mt-10">
      <div className="flex justify-end mr-5">
        <ThemeSwitch />
      </div>
      <div className="flex-grow">
        <span className="text-gradient font-bold text-5xl flex justify-center leading-tight">
          Welcome to this application!
        </span>
        <h1 className="text-2xl p-5 text-text-secondary flex justify-center">
          This is some more information about the application
        </h1>
        <div className="flex justify-center gap-x-4 mt-14">
          <button className="bg-button text-button p-4 rounded-xl font-semibold">
            This is a primary button
          </button>
          <button className="bg-button-secondary text-secondary ring-primary ring-2 rounded-xl p-4 font-semibold">
            This is a secondary button
          </button>
        </div>
      </div>

      <section className="bg-background-secondary py-20 max-lg:py-10">
        <div className="mx-auto grid max-w-screen-lg grid-cols-3 gap-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10">
          <div className="text-center">
            <h2 className="mb-3 text-xl font-semibold">Approachable</h2>
            <p className="text-text-secondary max-lg:max-w-[500px]">
              Add components without sending additional client side JavaScript
              Built on the latest React features
            </p>
          </div>
          <div className="text-center">
            <h2 className="mb-3 text-xl font-semibold">Versatile</h2>
            <p className="text-text-secondary max-lg:max-w-[500px]">
              Automatic Image Font and Script Optimizations for improved UX and
              Core Web Vitals
            </p>
          </div>
          <div className="text-center">
            <h2 className="mb-3 text-xl font-semibold">Performant</h2>
            <p className="text-text-secondary max-lg:max-w-[500px]">
              A rich incredibly adoptable template that scales between a small
              showcase website and a full size app
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
