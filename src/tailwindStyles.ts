// component: App
const MAIN_STYLE =
  "h-full flex flex-col justify-start items-stretch text-[#e3eeee] p-4 md:w-3xl";
const CLEAR_BUTTON_STYLE =
  "px-16 py-2 bold border-1 border-[#d0727266] rounded-md";
const H1_TITLE = "text-5xl";

// component: NewTodo
const TAILWIND_STYLES = {
  SECTION:
    "flex border-2 border-[#3e5682] rounded-bl-md rounded-tl-md h-12 my-4 shadow-[0px_0px_15px_-5px_#3e5682]",
  BUTTON:
    "border-l-3 border-[#3e5682] outline-none select-none px-4 transition duration-500 hover:backdrop-blur-[5px] hover:bg-[#3e5682]",
  INPUT_TEXT: "w-full outline-none pl-3",
};

// component: TodoList

const LI_STYLE = {
  //h-10
  li: " cursor-pointer backdrop-blur-[5px] bg-[#d5cfc01A] shadow-[0px_0px_5px_0px_rgba(255,_255,_255,_0.10)] rounded-md flex justify-start items-end gap-3 p-2 my-3 transition duration-500 hover:backdrop-blur-[5px] hover:bg-[#d5cfc033] hover:shadow-[0px_0px_15px_1px_rgba(255,_255,_255,_0.10)]",
  label: "w-full flex justify-center items-center gap-3",
  p: " cursor-pointer w-full font-semibold field-sizing-content  resize-none outline-none",
  img: "h-[1.5rem] select-none",
};

const UL_STYLE = `min-w-80 [&::-webkit-scrollbar]:w-2  [&::-webkit-scrollbar-track]:bg-gray-100  [&::-webkit-scrollbar-thumb]:bg-gray-300  dark:[&::-webkit-scrollbar-track]:bg-neutral-700  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500`;

export {
  MAIN_STYLE,
  CLEAR_BUTTON_STYLE,
  H1_TITLE,
  TAILWIND_STYLES,
  LI_STYLE,
  UL_STYLE,
};
