function Search() {
  return (
    <div className="w-full">
      <div className="pt-[10px] pl-[20px] pb-[10px] text-[20px] relative flex items-center border-b-2 border-gray-200 ">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <input
          className="placeholder-gray-300 w-full text-gray-500 focus:outline-none pl-[10px]"
          placeholder="Search People, Groups, Messages"
        ></input>
      </div>
    </div>
  );
}

export default Search;
