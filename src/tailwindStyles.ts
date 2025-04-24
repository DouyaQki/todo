// component: App
const MAIN_STYLE = "text-[#e3eeee] p-4 md:w-3xl";
const CLEAR_BUTTON_STYLE =
  "w-full border-1 border-[#3e5682] rounded-md p-2 mt-4 transition duration-300 hover:bg-[#3e5682]";
const H1_TITLE = "text-5xl";

// component: NewTodo
const TAILWIND_STYLES = {
  SECTION:
    "flex border-1 border-[#3e5682] rounded-bl-md rounded-tl-md h-12 my-4",
  BUTTON:
    "w-24 outline-none select-none p-2 transition duration-300 hover:bg-[#3e5682]",
  INPUT_TEXT: "w-full outline-none pl-3",
};

// component: TodoList
const LI_STYLE = {
  li: "h-12 border-b-1 flex items-center gap-3 py-2",
  label: "flex w-full items-center gap-3",
  p: "text-[1.25rem]",
  img: "h-full select-none transition duration-300 hover:bg-[#3e5682]",
  checkbox: "h-5 w-5",
};
const CHECKBOX_STYLE = "h-5 w-5";
const UL_STYLE = `h-96 overflow-y-auto  [&::-webkit-scrollbar]:w-2  [&::-webkit-scrollbar-track]:bg-gray-100  [&::-webkit-scrollbar-thumb]:bg-gray-300  dark:[&::-webkit-scrollbar-track]:bg-neutral-700  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500`

export {
  MAIN_STYLE,
  CLEAR_BUTTON_STYLE,
  H1_TITLE,
  TAILWIND_STYLES,
  LI_STYLE,
  CHECKBOX_STYLE,
  UL_STYLE
};
