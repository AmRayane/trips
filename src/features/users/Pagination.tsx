import { useSearchParams } from "react-router";
import { useUsers } from "./useUsers";
import { MAX_PAGE } from "../../types";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

export default function Pagination() {
  const [searchParamas, setSearchParams] = useSearchParams();
  const { data, isLoading } = useUsers();
  const total = data?.total ?? 0;
  const maximumPages = Math.ceil(total / MAX_PAGE);
  const currentPage: number = parseInt(searchParamas.get("page") ?? "1");
  const pageListe = Array.from({ length: maximumPages }, (_, i) => i + 1);

  //if loading
  if (isLoading) return <p>is laoding</p>;
  //function for next page
  function nextPage() {
    const nextPage =
      currentPage >= maximumPages ? currentPage : currentPage + 1;
    searchParamas.set("page", nextPage.toString());
    console.log("search params ", searchParamas);
    setSearchParams(searchParamas);
  }
  //function for previous page
  function previousPage() {
    const previousPage = currentPage <= 1 ? currentPage : currentPage - 1;
    searchParamas.set("page", previousPage.toString());
    setSearchParams(searchParamas);
  }

  return (
    <div className=" px-5 py-5 flex items-center justify-between border-t-[1px] border-[#EAECF0]">
      <button
        onClick={() => previousPage()}
        disabled={currentPage === 1}
        className="flex items-center gap-1 px-4 py-2 rounded-xl border-[#EAECF0] border-[1px] "
      >
        <GrFormPreviousLink /> Previous
      </button>
      <div className="flex items-center gap-1 ">
        {pageListe.map((page) => (
          <p
            className={`py-2 px-4 rounded-xl  ${
              page === currentPage ? "bg-[#256FF1] text-white" : ""
            }`}
          >
            {page}
          </p>
        ))}
      </div>
      <button
        onClick={() => nextPage()}
        disabled={currentPage === maximumPages}
        className="flex items-center gap-1 px-4 py-2 rounded-xl border-[#EAECF0] border-[1px]"
      >
        Next <GrFormNextLink />
      </button>
    </div>
  );
}
