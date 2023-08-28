function Textarea({placeholder}) {
  return (
    <textarea
      placeholder={placeholder}
      type="text"
      className="bg-black_2 border-1 border-solid border-grey_3 text-grey_3 w-full outline-none rounded-16px h-130px py-17px px-27px"
    ></textarea>
  );
}

export default Textarea;
