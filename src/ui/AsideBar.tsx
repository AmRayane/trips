import Logo from "./Logo";
import Menu from "./Menu";

export default function AsideBar() {
  return (
    <div className="relative flex items-center justify-between px-4 py-4 shadow-lg md:sticky md:top-0 md:h-[100vh] md:flex-col md:items-start md:justify-normal md:gap-3 md:divide-y">
      <Logo />
      <Menu />
    </div>
  );
}
