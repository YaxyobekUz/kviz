import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import Success from "./pages/Success";

// components
import Page from "./Page";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const totalPage = 10;
  const pageRef = useRef();
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);

  useEffect(() => {
    if (pageRef) {
      pageRef.current.scrollTo(0, 0);
    }
  }, [page]);

  return (
    <Router>
      <Routes>
        {/* --- HOME --- */}
        <Route
          index
          path="/"
          element={
            <div className="h-screen">
              <Header />

              {/* main */}
              <main className="container h-[calc(100%-176px)] py-4">
                <div
                  ref={pageRef}
                  className="h-full overflow-y-auto scroll-hidden pb-12"
                >
                  <Page
                    page={page}
                    maxPage={maxPage}
                    updatePage={(number) => setPage(number)}
                    updateMaxPage={(number) => setMaxPage(number)}
                  />
                </div>
              </main>

              {page !== 10 && (
                <Footer
                  page={page}
                  maxPage={maxPage}
                  totalPage={totalPage}
                  updatePage={(number) => setPage(number)}
                />
              )}
            </div>
          }
        />

        {/* --- SUCCESS --- */}
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
};

export default App;
