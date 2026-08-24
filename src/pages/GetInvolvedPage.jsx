import { GetInvolved } from "../components/GetInvolved.jsx";
import { Audiences } from "../components/Audiences.jsx";
import { FoundingSupporters } from "../components/FoundingSupporters.jsx";
import { CorporatePartners } from "../components/CorporatePartners.jsx";
import { StatusBand } from "../components/StatusBand.jsx";

export function GetInvolvedPage() {
  return (
    <>
      <GetInvolved />
      <Audiences />
      <FoundingSupporters />
      <CorporatePartners />
      <StatusBand />
    </>
  );
}
