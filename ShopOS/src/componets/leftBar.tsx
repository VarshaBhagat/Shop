import { FaHome } from "react-icons/fa";
import { MdOutlineHome, MdOutlineStore } from "react-icons/md";
import { GoWorkflow } from "react-icons/go";

export const LeftBar = () => {
  const path = window.location.pathname;
  return (
    <section className="border-r-2 flex items-center flex-col py-12 auto-cols-fr h-full">
      <div>
        <FaHome size={50} onClick={() => (window.location.href = "/")} className="homeIcon"/>
      </div>
      <div className="pt-60">
        <MdOutlineHome
          size={30}
          className="mb-8 searchIcon"
          color={path == "/" || path == "/templates" ? "black" : "grey"}
          onClick={() => (window.location.href = "/")}
        />
        <MdOutlineStore
          size={30}
          className="mb-8 searchIcon"
          color={path == "/store" || path == "newStore" ? "black" : "grey"}
          onClick={() => (window.location.href = "/store")}
        />
        <GoWorkflow
          size={30}
          className="mb-8 searchIcon"
          color={path == "/workflows" ? "black" : "grey"}
          onClick={() => (window.location.href = "/workflows")}
        />
      </div>
    </section>
  );
};
