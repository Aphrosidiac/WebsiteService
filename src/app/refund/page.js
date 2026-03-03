import PolicyPage from "../components/PolicyPage";
import { refundSections } from "@/lib/policies";

export const metadata = {
  title: "Refund Policy | AP Devotion",
};

export default function RefundPage() {
  return <PolicyPage title="Refund Policy" sections={refundSections} />;
}
