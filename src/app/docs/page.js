"use client";

import {useRef, useState} from "react";
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { SignatureCanvas } from "react-signature-canvas";

const doc_link = '/pdf/prohlaseni.pdf'

async function downloadPdf() {
    const url = doc_link;
    const response = await fetch(url);
    const pdfBlob = await response.blob();

    const link = document.createElement("a");
    link.href = URL.createObjectURL(pdfBlob);
    link.download = "ruzove_prohlaseni.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

async function modifyPdf(name, surname, id, signatureImage) {

    const url = '/pdf/prohlaseni.pdf';
    const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(existingPdfBytes)
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

    const pages = pdfDoc.getPages()
    const firstPage = pages[0]
    const { width, height } = firstPage.getSize()

    console.log(width, height)

    firstPage.drawText(name, {
        x: width/2-30,
        y: 841-195,
        size: 14,
        font: helveticaFont,
        color: rgb(0, 0, 0),
    })

    firstPage.drawText(surname, {
        x: width/5-40,
        y: 841-195,
        size: 14,
        font: helveticaFont,
        color: rgb(0, 0, 0),
    })

    firstPage.drawText(id, {
        x: width*4/5-40,
        y: 841-195,
        size: 14,
        font: helveticaFont,
        color: rgb(0, 0, 0),
    })

    const secondPage = pages[1]

    // sign
    if (signatureImage) {
        const signatureBytes = await fetch(signatureImage).then(res => res.arrayBuffer());
        const signatureEmbedded = await pdfDoc.embedPng(signatureBytes);

        secondPage.drawImage(signatureEmbedded, {
            x: width/2-50,
            y: height/2+20,
            width: 25*3,
            height: 10*3,
        });
    }

    const pdfBytes = await pdfDoc.save()

    let blob = new Blob([pdfBytes], {type: "application/pdf"});
    let link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "vase_podepsane_ruzove_prohlaseni.pdf";
    link.click();
}

export default function Docs() {

    const [formData, setFormData] = useState({
        firstName: "",
        secondName: "",
        id: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    function onSubmit(event) {
        event.preventDefault();

        if (!formData.firstName || !formData.secondName || !formData.id) {
            alert("Kazda polozka je povina!");
            return;
        }

        if (sigCanvas.current.isEmpty()) {
            alert("Chybi podpis!");
            return;
        }

        const signatureImage = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
        modifyPdf(formData.firstName, formData.secondName, formData.id, signatureImage);
        console.log("Form submitted:", formData);
    }

    /* SIGNATURE */

    const [imageURL, setImageURL] = useState(null);
    const sigCanvas = useRef(null);

    const clear = () => sigCanvas.current.clear();
    const save = () => setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));

    /* SIGNATURE */

    return (
        <div className="mt-10 mb-10 lg:mt-20 lg:mb-20 min-h-[50%] p-10">
            <div className="flex flex-row space-x-5 items-center mb-10">
                <h1 className="text-xl font-semibold">Růžové Prohlášení</h1>
                <button className="p-2 bg-button-button-4 rounded-[2vh]" onClick={downloadPdf} type="button" >
                    Ukázat dokument
                </button>
            </div>

            <form onSubmit={onSubmit}>
                <div className="md:w-1/2">
                    <div className="flex flex-col space-y-2">
                        <div className="flex flex-col justify-between">
                            <label htmlFor="name1">Jméno</label>
                            <input
                                required
                                name="firstName"
                                id="name1"
                                className="text-text-secondary bg-background-secondary p-1 pl-[15px] rounded-[2vh]"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col justify-between">
                            <label htmlFor="name2">Příjmení</label>
                            <input
                                required
                                name="secondName"
                                id="name2"
                                className="text-text-secondary bg-background-secondary p-1 pl-[15px] rounded-[2vh]"
                                value={formData.secondName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col justify-between">
                            <label htmlFor="id">Rodné číslo</label>
                            <input
                                required
                                name="id"
                                id="id"
                                className="text-text-secondary bg-background-secondary p-1 pl-[15px] rounded-[2vh]"
                                type="text"
                                value={formData.id}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col justify-between">
                            <label htmlFor="sign">Podpis</label>
                            <div className="flex flex-col">
                                <SignatureCanvas
                                    ref={sigCanvas}
                                    canvasProps={{
                                        className: "signatureCanvas sm:w-[250px] h-[100px] bg-background-secondary rounded-[2vh]"
                                    }}
                                />
                                <div>
                                    <button className="mt-2 p-2 bg-button-button-4 rounded-[2vh]" onClick={clear}
                                            type="button"
                                    >
                                        Smazat podpis
                                    </button>
                                    <button className="mt-2 p-2 bg-button-button-4 rounded-[2vh]" onClick={save}
                                            type="button"
                                    >
                                        Ulozit podpis
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button className="border-2 border-black mt-10 p-3 bg-button-button-4 rounded-[2vh]" type="submit" >
                                Odeslat dokument
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
