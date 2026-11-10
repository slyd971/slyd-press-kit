import { ConceptPage, generateConceptMetadata, type ConceptPageProps } from "@/components/press-kit/ConceptPage";

export function generateMetadata(props: ConceptPageProps) {
  return generateConceptMetadata(props);
}

export default function Page(props: ConceptPageProps) {
  return <ConceptPage {...props} />;
}
