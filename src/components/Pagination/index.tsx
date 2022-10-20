import React from "react";
import { Container, PaginationItem } from "./styles";

const Pagination = () => {
  let PageQtd = 1;
  let PageTotal = 50;
  return (
    <Container>
      {PageQtd > 1 && (
        <>
          <PaginationItem>Primeira</PaginationItem>
          <PaginationItem>{PageQtd - 1}</PaginationItem>
        </>
      )}
      <PaginationItem>{PageQtd}</PaginationItem>
      {PageQtd !== PageTotal && <PaginationItem>{PageQtd + 1}</PaginationItem>}
      {PageQtd !== PageTotal && <PaginationItem>Última</PaginationItem>}
    </Container>
  );
};

export default Pagination;
