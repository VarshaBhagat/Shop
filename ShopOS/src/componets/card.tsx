export const Card = (props: {
    tag?: string,
    details?: string,
    btnText?: string,
    title?: string, 
    img?: string 
}) => {
  return (
    <div className="w-11/12 border-2 p-5 rounded-2xl mb-8">
      <img src={props.img} alt="card image" className="h-52 rounded-2xl" />
      <div className="rounded-full text-sm bg-grey w-fit px-2 bg-gray-200 text-neutral-400 mt-4">
        {props.tag}
      </div>
      <p className="font-semibold text-lg my-2 sm:text-sm">{props.title}</p>
      <p className="sm:text-sm">{props.details}</p>
      <button className="rounded-full bg-black w-full text-white h-10 mt-4 mb-2 sm:text-sm">
        {props.btnText}
      </button>
    </div>
  );
}
