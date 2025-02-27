"use client";

import {PDFDocument, rgb, StandardFonts} from "pdf-lib";

const doc_link = '/pdf/prohlaseni.pdf'
const sample_document = '/pdf/smlouva_prohlaseni_ukazka.pdf'

async function showPdf() {

    window.open(sample_document, "_blank");
}

async function modifyPdf(name, surname, id, signatureImage) {

    const url = '/pdf/prohlaseni.pdf';
    const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(existingPdfBytes)
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

    const pages = pdfDoc.getPages()
    const firstPage = pages[0]
    const { width, height } = firstPage.getSize()

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

    const blob = new Blob([pdfBytes], {type: "application/pdf"});
    const link = document.createElement("a");
    //link.href = window.URL.createObjectURL(blob);
    link.href = URL.createObjectURL(blob);
    link.download = "vase_podepsane_ruzove_prohlaseni.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

export { showPdf, modifyPdf, doc_link}