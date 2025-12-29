import { TabBar } from "./components/TabBar";

export default function MobileTabBarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="pb-16 md:pb-0">{children}</div>
      <TabBar />
    </>
  );
}
