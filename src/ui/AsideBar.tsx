import Logo from "./Logo";
import Menu from "./Menu";
import MenuMedium from "./MenuMedium";

export default function AsideBar() {
  return (
    <div className="flex fixed items-center justify-between px-4 py-4 md:items-start md:flex-col md:justify-normal  md:divide-y md:gap-3 md:sticky md:h-[100vh] md:top-0 ">
      <div className="md:py-2">
        <Logo />
      </div>
      <MenuMedium />
      <Menu />
    </div>
  );
}
