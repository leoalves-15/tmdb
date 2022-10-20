import React from "react";
import { Container, PaginationItem, ChangePage } from "./styles";
import Next from "../../images/Path.svg";

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
      <ChangePage src={Next} />{" "}
      {PageQtd !== PageTotal && <PaginationItem>Última</PaginationItem>}
    </Container>
  );
};

export default Pagination;
