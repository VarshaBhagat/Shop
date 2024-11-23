export const Tag = (props: {
  activeTag: string;
  name: string;
  setActiveTag: (name: string) => void;
}) => {
  const isActive = props.activeTag === props.name;
  return (
    <div
      className={`rounded-full text-lg bg-grey w-fit px-8 py-2 mt-4 ${
        isActive ? "bg-black text-white" : "border-2 text-slate-300"
      } tag`}
      onClick={() => props.setActiveTag(props.name)}
    >
      {props.name}
    </div>
  );
};
