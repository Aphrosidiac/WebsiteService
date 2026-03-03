import PolicyPage from "../components/PolicyPage";
import { cancellationSections } from "@/lib/policies";

export const metadata = {
  title: "Cancellation Policy | AP Devotion",
};

export default function CancellationPage() {
  return (
    <PolicyPage title="Cancellation Policy" sections={cancellationSections} />
  );
}
