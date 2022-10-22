import React, { useContext } from "react";
import { Container, PaginationItem, PaginationItemActive } from "./styles";
import { ContextHome } from "../../contexts/Home/ContextHome";

const Pagination = () => {
  const { setPage, page, allPages } = useContext(ContextHome);

  const pagenavigation = (page: number) => {
    setPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <PaginationItem
        role="button"
        onClick={() => {
          pagenavigation(1);
        }}
      >
        Primeira
      </PaginationItem>
      {page !== 1 && (
        <PaginationItem
          role="button"
          onClick={() => {
            pagenavigation(page - 1);
          }}
        >
          {page - 1}
        </PaginationItem>
      )}
      <PaginationItemActive
        role="button"
        onClick={() => {
          pagenavigation(page);
        }}
      >
        {page}
      </PaginationItemActive>
      {page !== allPages && (
        <PaginationItem
          role="button"
          onClick={() => {
            pagenavigation(page + 1);
          }}
        >
          {page + 1}
        </PaginationItem>
      )}
      <PaginationItem
        role="button"
        onClick={() => {
          pagenavigation(allPages);
        }}
      >
        Última
      </PaginationItem>
    </Container>
  );
};

export default Pagination;
