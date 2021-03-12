/// <reference types="cypress" />

import { API } from "../../support/API";

describe("Bevragen van een willekeurige tabel via generieke rfc ZRFC_READ_TABLE", () => {
  context("Tabel BKORM wordt bevraagd", () => {

    var payload = `request`;

    it("RFC Request", () => {
      API.postRequest(payload);
    });
  });
});
