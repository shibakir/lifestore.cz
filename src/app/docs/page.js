import {DocumentsForm} from "@/components/docs/DocumentsForm";
import Title from "@/common/Title";
import {Button} from "@/components/ui/button";
import {showPdf} from "@/components/docs/PdfComponent"
import { metadata } from "@/constants/metadata";

export const generateMetadata = () => ({
    title: metadata.documents.title,
    description: metadata.documents.description,
});

export default function Docs() {

    return (
        <div className="main mt-20 mb-20 xl:mt-36 xl:mb-36 space-y-20">
            <div className="flex flex-col space-y-5 sm:space-y-0 sm:flex-row sm:space-x-5">
                <Title className="text-xl" title={"Podepisování dokumentů"}/>
                <Button
                    className="bg-button-button-3 hover:bg-button-button-1 text-text-primary hover:text-text-primary"
                    type="button"
                    onClick={showPdf}
                >
                    Ukázat dokument
                </Button>
            </div>

            <DocumentsForm/>
        </div>
    );
}
