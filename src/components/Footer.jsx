import React from "react";

const Footer = ({ page = 1, updatePage = () => 1, totalPage, maxPage = 1 }) => {
  return (
    <footer className="flex items-center h-24 border-t">
      <div className="flex items-start gap-5 container">
        <div className="grow">
          {/* done */}
          <p className="text-xs text-gray-500 mb-2">
            <span className="mr-2.5 font-semibold">Готово:</span>
            <span className=" font-semibold text-primary">
              {" "}
              {page} / {totalPage}
            </span>
          </p>

          {/* progress bar */}
          <div className="w-full h-1.5 rounded-full overflow-hidden bg-gray-100">
            <div style={{ width: page * 10 + "%" }} className="h-full bg-primary transition-all duration-500"></div>
          </div>
        </div>

        {/* prev */}
        <button
          onClick={() => {
            if (page !== 0) {
              updatePage(page - 1);
            }
          }}
          disabled={page === 0}
          className="swiper-button-prev flex items-center justify-center size-11 rounded-full border transition-colors duration-200 disabled:opacity-50"
        >
          <svg
            viewBox="0 0 24 24"
            className="fill-[#9d9d9d]s size-[18px] rotate-180"
          >
            <path
              fill="#9d9d9d"
              strokeWidth="0"
              fillRule="nonzero"
              d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
            ></path>
          </svg>
        </button>

        {/* next */}
        <button
          onClick={() => {
            if (page !== totalPage && page !== maxPage) {
              updatePage(page + 1);
            }
          }}
          disabled={page === totalPage || page === maxPage}
          className="swiper-button-next flex items-center justify-center gap-2.5 size-28 h-11 bg-primary text-white rounded-full transition-colors duration-200 disabled:opacity-70"
        >
          <span className="font-semibold pb-0.5">Далее</span>

          {/* icon */}
          <svg viewBox="0 0 24 24" className="size-[18px]">
            <path
              fill="#ffffff"
              strokeWidth="0"
              fillRule="nonzero"
              d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
            ></path>
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
