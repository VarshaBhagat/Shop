import { ImArrowLeft2 } from "react-icons/im";

export const Header = (props: { name: string }) => {
  return (
    <section className="flex items-center space-x-4 ml-4">
      <ImArrowLeft2 onClick={()=>window.location.href='/'} className="searchIcon" />
      <h1 className="text-xl font-bold sm:text-sm truncate">{props.name}</h1>
    </section>
  );
};
