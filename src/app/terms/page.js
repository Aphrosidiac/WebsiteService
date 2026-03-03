import PolicyPage from "../components/PolicyPage";
import { termsSections } from "@/lib/policies";

export const metadata = {
  title: "Terms and Conditions | AP Devotion",
};

export default function TermsPage() {
  return <PolicyPage title="Terms and Conditions" sections={termsSections} />;
}
