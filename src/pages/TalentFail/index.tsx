import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAppSelector } from "@/app/hooks";
import { ReactComponent as ArchiveTickBlue } from "@/assets/svg/archive-tick-blue.svg";
import { ReactComponent as ArchiveTick } from "@/assets/svg/archive-tick.svg";
import { ReactComponent as ArrowRight } from "@/assets/svg/arrow-right.svg";
import { ReactComponent as HeartMemoji } from "@/assets/svg/heart-memoji.svg";
import { ReactComponent as Search } from "@/assets/svg/search.svg";
import { ReactComponent as Trash } from "@/assets/svg/trash.svg";
import useFailedTalentQuery from "@/lib/hooks/useFailedTalentQuery";
import useFormList from "@/lib/hooks/useFormList";
import useFormListQuery from "@/lib/hooks/useFormListQuery";
import useLikeMutate from "@/lib/hooks/useLikeMutate";
import usePagination from "@/lib/hooks/usePagination";
import useSearchFailedQuery from "@/lib/hooks/useSearchFailedQuery";
import formatDate from "@/lib/utils/formatDate";
import type { IFailedTalent } from "@/types/talent";
import Banner from "@components/Common/Banner";
import FailProcedureBadge from "@components/Talent/FailProcedureBadge";
import Pagination from "@components/Talent/Pagination";
import TKeywordBadge from "@components/Talent/TKeywordBadge";

const TalentFail = () => {
  const { auth } = useAppSelector((state) => state);
  const formData = useFormListQuery();
  const [recruitId, handleChangeFormList] = useFormList(formData);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter") ?? "all";
  const { page } = usePagination();
  const { likeMutate } = useLikeMutate();
  const { searchInput, handleSearchBar, searchData } =
    useSearchFailedQuery(recruitId);
  const failedTalent = useFailedTalentQuery(recruitId, page, filter);

  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams({
      filter: e.target.value,
    });
    searchInput.current!.value = "";
  };

  if (formData?.result === "FAIL") {
    return (
      <Banner className="h-[25rem]">
        <div className="mx-auto flex h-full max-w-7xl flex-col items-center justify-center">
          <h1 className="Head2Semibold">
            안녕하세요, <span>{auth.companyName}</span>님!
          </h1>
          <p className="Head4/Semibold Head4Semibold mt-[6px] mb-9">
            첫 지원서 폼 만들고 편한 채용관리하세요!
          </p>
          <Link
            to="/form/new"
            className="flex items-center gap-2 rounded-lg border border-blue-500 bg-gray-0 px-16 py-2 text-blue-500"
          >
            만들러 가기 <ArrowRight />
          </Link>
        </div>
      </Banner>
    );
  }

  if (failedTalent?.data.result === "FAIL") {
    return (
      <>
        <input
          type="checkbox"
          checked={true}
          id="confirm"
          className="modal-toggle"
        />
        <label htmlFor="confirm" className="modal">
          <label className="relative grid w-[680px] place-items-center rounded-lg bg-gray-0 pt-10 pb-[3.75rem] shadow-job2">
            <img src="/assets/images/folder.webp" alt="폴더" />
            <p className="SubHead1Semibold pt-6 pb-8 text-gray-800">
              탈락 인재가 존재하지 않습니다.
            </p>
            <div className="modal-action mt-0">
              <label
                htmlFor="confirm"
                className="SubHead2Semibold cursor-pointer rounded-lg bg-blue-500 px-[3.75rem] py-[0.7188rem] text-gray-0 shadow-blue"
                onClick={() => navigate("/")}
              >
                확인
              </label>
            </div>
          </label>
        </label>
      </>
    );
  }

  return (
    <>
      <Banner className="h-16">
        <div className="mx-auto flex h-full max-w-7xl items-center">
          <div className="SubHead2Semibold">
            <select
              className="bg-transparent pr-3 outline-none"
              onChange={handleChangeFormList}
            >
              {formData?.data !== null &&
                formData?.data.map((form) => (
                  <option
                    key={form.id}
                    value={form.id}
                    className="text-gray-900"
                  >
                    {form.title}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </Banner>
      <section className="pt-[6.25rem]">
        <h4 className="Head3Semibold">탈락 인재 보관함</h4>
        <p className="SubHead1Semibold mt-6 mb-12 text-gray-500">
          아쉽게 탈락했던 인재와 다시 함께할 수 있도록 모아놓은 보관함이에요
        </p>
      </section>
      <section className="rounded-[20px] border-[1.5px] border-gray-50 bg-gray-0 p-11">
        <div className="flex gap-4">
          {/* <div className="rounded-xl border-2 border-[#F2F4F8] p-[1.125rem]"> */}
          <select
            className="pr-2 outline-none"
            onChange={handleChange}
            value={filter}
          >
            <option disabled>인재를 선택하세요</option>
            <option value="all">전체 인재</option>
            <option value="wish">찜된 탈락 인재</option>
          </select>
          {/* </div> */}
          <form
            onSubmit={handleSearchBar}
            className="SubHead1Medium mx-6 flex justify-between rounded-md bg-blue-25 text-gray-400"
          >
            <label htmlFor="searchBar" className="w-full py-4 px-6">
              <input
                id="searchBar"
                placeholder="인재를 검색해보세요"
                className="autofill:none h-full w-full bg-transparent focus:outline-none"
                ref={searchInput}
              />
            </label>
            <button className="mr-6">
              <Search />
            </button>
          </form>
        </div>

        <div className="mt-16">
          <table className="relative table w-full">
            <thead className="">
              <tr>
                {TH_ITEMS.map((item) => (
                  <th
                    key={item}
                    className="SubHead1Medium bg-white text-gray-600"
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* {!failedTalent?.length && (
                <tr className="absolute left-1/2 -translate-x-1/2 py-5">
                  <td className="Head4Semibold">
                    조건에 부합하는 인재가 없습니다.
                  </td>
                </tr>
              )} */}
              {/* 검색 결과 없을 시 어떻게 할지 처리하기, 검색 결과 있고 탈락인재 없을시 분기 처리 어떻게 할지? */}
              {
                failedTalent?.data.map((talent: IFailedTalent) => (
                  <tr key={talent.applyId} className="border-b border-gray-50">
                    <th>
                      <Link to={`/talent/detail/${talent.applyId}`}>
                        <div className="flex items-center gap-4">
                          <HeartMemoji /> <span>{talent.applyName}</span>
                        </div>
                      </Link>
                    </th>
                    <td>
                      <div className="flex gap-6px">
                        {talent.keywords.map((keyword) => (
                          <TKeywordBadge key={keyword}>{keyword}</TKeywordBadge>
                        ))}
                      </div>
                    </td>
                    <td>
                      {talent.applyProcedure !== null ? (
                        <FailProcedureBadge>
                          {talent.applyProcedure}
                        </FailProcedureBadge>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="SubHead2Medium text-gray-500">
                      {formatDate(talent.createdTime)}
                    </td>
                    <td className="SubHead2Medium text-gray-500">
                      {talent.recentMessageTime !== null
                        ? formatDate(talent.recentMessageTime)
                        : "-"}
                    </td>
                    <td>
                      <div className="flex gap-4">
                        <button onClick={() => likeMutate(talent.applyId)}>
                          {talent.wish ? <ArchiveTickBlue /> : <ArchiveTick />}
                        </button>

                        {/* <button>
                          <Trash />
                        </button> */}
                      </div>
                    </td>
                  </tr>
                ))
                // : searchData?.map((talent) => (
                //     <tr
                //       key={talent.applyId}
                //       className="border-b border-gray-50"
                //     >
                //       <th>
                //         <div className="flex items-center gap-4">
                //           <HeartMemoji /> <span>{talent.applyName}</span>
                //         </div>
                //       </th>
                //       <td>
                //         <div className="flex gap-6px">
                //           {talent.keywords.map((keyword) => (
                //             <TKeywordBadge key={keyword}>
                //               {keyword}
                //             </TKeywordBadge>
                //           ))}
                //         </div>
                //       </td>
                //       <td>
                //         {talent.applyProcedure !== null ? (
                //           <FailProcedureBadge>
                //             {talent.applyProcedure}
                //           </FailProcedureBadge>
                //         ) : (
                //           "-"
                //         )}
                //       </td>
                //       <td className="SubHead2Medium text-gray-500">
                //         {formatDate(talent.createdTime)}
                //       </td>
                //       <td className="SubHead2Medium text-gray-500">
                //         {talent.recentMessageTime !== null
                //           ? formatDate(talent.recentMessageTime)
                //           : "-"}
                //       </td>
                //       <td>
                //         <div className="flex gap-4">
                //           <button onClick={() => likeMutate(talent.applyId!)}>
                //             {talent.wish ? (
                //               <ArchiveTickBlue />
                //             ) : (
                //               <ArchiveTick />
                //             )}
                //           </button>

                //           <button>
                //             <Trash />
                //           </button>
                //         </div>
                //       </td>
                //     </tr>
              }
            </tbody>
          </table>
          <Pagination length={failedTalent?.data.length} />
        </div>
      </section>
    </>
  );
};

const TH_ITEMS = ["인재", "키워드", "탈락시점", "지원일", "최근알림일", "액션"];
const btnLimint = 5;

export default TalentFail;
