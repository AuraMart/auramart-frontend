export const Item = (props) => {
  const ScrollToSection = () => {
    if (props.scrollToRef && props.scrollToRef.current) {
      props.scrollToRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full h-[50vh] sm:h-[80vh] md:h-[90vh] overflow-hidden">
      <img
        src={props.item.image}
        alt={props.item.title}
        className="w-full h-full "
      />
      <button
        onClick={ScrollToSection}
        className="
          absolute 
          top-[70%] 
          left-[50%] 
          -translate-x-1/2 
          -translate-y-1/2 
          bg-yellow-400 
          text-black 
          px-4 
          py-2 
          text-lg 
          font-medium 
          rounded-md 
          shadow-lg 
          hover:bg-yellow-500 
          transition-all
          md:text-base 
          md:top-[75%] 
          md:px-3 
          md:py-2
          sm:text-sm 
          sm:top-[80%] 
          sm:px-2 
          sm:py-1"
      >
        Shop Now
      </button>
    </div>
  );
};
