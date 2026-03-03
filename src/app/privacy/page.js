import PolicyPage from "../components/PolicyPage";
import { privacySections } from "@/lib/policies";

export const metadata = {
  title: "Privacy Policy | AP Devotion",
};

export default function PrivacyPage() {
  return <PolicyPage title="Privacy Policy" sections={privacySections} />;
}
