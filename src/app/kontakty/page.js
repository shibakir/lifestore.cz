import ContactsClient from "@/app/klienti/ContactsClient";
import { metadata } from "@/constants/metadata";

export const generateMetadata = () => ({
    title: metadata.contacts.title,
    description: metadata.contacts.description,
});

export default function Contacts() {

    return <ContactsClient/>;
}


