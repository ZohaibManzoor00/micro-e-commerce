import ThemeSwitch from "../../components/theme-switcher";

export default function Home() {
  return (
    <div className="">
      <ThemeSwitch />
      <span className="text-gradient font-bold text-5xl flex justify-center leading-tight">
        Welcome to this application!
      </span>
      <h1 className="text-2xl p-5 text-text-secondary flex justify-center">
        This is some more information about the application
      </h1>
      <div className="flex justify-center gap-x-4">
        <button className="bg-button text-button p-4 rounded-xl font-semibold">
          This is a main button
        </button>
        <button className="bg-button-secondary text-secondary ring-primary ring-2 rounded-xl p-4 font-semibold">
          This is a main button
        </button>
      </div>
    </div>
  );
}
