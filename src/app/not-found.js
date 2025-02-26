import {metadata} from "@/constants/metadata";
import Title from "@/common/Title";

export const generateMetadata = () => ({
    title: metadata.nodata.title,
    description: metadata.nodata.description,
});

export default function NotFound() {

    return (
        <div className="min-h-screen main mt-16 xl:mt-36 xl:mb-36 text-center">
            <Title className="text-text-secondary" title={metadata.nodata.title}/>
            <Title className="text-text-secondary" title={metadata.nodata.description}/>
        </div>
    );
}