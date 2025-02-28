"use client";

import fontkit from '@pdf-lib/fontkit';
import {PDFDocument, rgb} from "pdf-lib";

const template_document = '/pdf/smlouva_prohlaseni.pdf'
const sample_document = '/pdf/smlouva_prohlaseni_ukazka.pdf'

async function showPdf() {

    window.open(sample_document, "_blank");
}

async function generatePdf(form="", sigCanvas="" ) {
    /*
    let data = [];

    try {
        data = [

            { name: "fullName", value: [form.name, form.surname].join(" "), x: 0, y: 0 },

            { name: "name", value: form.name, x: 0, y: 0 },
            { name: "surname", value: form.surname, x: 0, y: 0 },
            { name: "birthSurname", value: form.birthSurname, x: 0, y: 0 },
            { name: "birthDate", value: form.birthDate, x: 0, y: 0 },


        ];
    } catch (e) {
        console.log(e)
    }
     */

    const data = [
        [
            { name: "fullName", value:(["MojeJmeno", "MojePříjmení"].join(" ")), x: 215, y: 580 },

            //{ name: "name", value: "MojeJmeno", x: 0, y: 0 },
            //{ name: "surname", value: "MojePříjmení", x: 0, y: 0 },
            { name: "birthSurname", value: "MojePříjmeníZaSvobodna", x: 215, y: 580-18 },
            { name: "birthDate", value: "15.06.2001", x: 215, y: 580-18*2 },
            { name: "id", value: "72.04.25/0999", x: 215, y: 580-18*3 +2 },
            { name: "insuranceIfSlovak", value: "12345", x: 215, y: 580-14-18*4 },
            { name: "accountPrefix", value: "0000000", x: 215-45, y: 580-14-18*5 },
            { name: "accountNumber", value: "2222222", x: 215+110, y: 580-14-18*5 },
            { name: "bankCode", value: "3333", x: 215+110+145, y: 580-14-18*5 },
            { name: "permanentResidence", value: "Trvalé bydlištěTrvalé bydlištěTrvalé bydliště", x: 215-45, y: 580-13-18*6 },
            { name: "city", value: "Moje Město", x: 215-40-40, y: 580-12-18*7 },
            { name: "postCode", value: "16000", x: 215 + 200, y: 580-12-18*7 },
            { name: "phone", value: "+420773722209", x: 215-35, y: 580-10-18*8 },
            { name: "email", value: "obelisk34@seznam.cz", x: 215, y: 580-10-18*9 },
            { name: "birthplace", value: "Město narozeníMěsto narození", x: 215-30, y: 580-9-18*10},
            { name: "citizenship", value: "Státní občanství", x: 215, y: 580-8-18*11 },
            { name: "insuranceName", value: "Název zdravotní pojišťovny", x: 215+40, y: 580-7-18*12 },
            { name: "insuranceCode", value: "444", x: 215+38, y: 580-7-18*13 },
        ], [
            { name: "fullName", value:(["MojeJmeno", "MojePříjmení"].join(" ")), x: 215, y: 585 },
            { name: "id", value: "72.04.25/0999", x: 215, y: 585-17 },
        ],
        [
            { name: "fullName", value:(["MojeJmeno", "MojePříjmení"].join(" ")), x: 215, y: 674 },
            { name: "id", value: "72.04.25/0999", x: 215, y: 674-16 },
        ],
        [
            { name: "fullName", value:(["MojeJmeno", "MojePříjmení"].join(" ")), x: 215, y: 674+16 },
            { name: "id", value: "72.04.25/0999", x: 215, y: 674 },
        ],
        [
            { name: "surname", value: "MojePříjmení", x: 132, y: 598 },
            { name: "name", value: "MojeJmeno", x: 272, y: 598 },
            { name: "id", value: "72.04.25/0999", x: 400, y: 598 },

            { name: "permanentResidence", value: "Trvalé bydlištěTrvalé bydlištěTrvalé bydliště", x: 220, y: 585 },
            { name: "city_PST", value: (["Moje Město", "16000"].join(" ")), x: 220, y: 585-15 },
        ],
    ]

    //console.log(testData)

    //const signatureImage = sigCanvas.current.getCanvas().toDataURL("image/png");

    const templatePdf = await fetch(template_document).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(templatePdf)

    pdfDoc.registerFontkit(fontkit);
    const fontBytes = await fetch('/fonts/DejaVuSans.ttf').then(res => res.arrayBuffer());
    const customFont = await pdfDoc.embedFont(fontBytes);

    const pages = pdfDoc.getPages()
    const pagesList = [
            pages[0], // smlouva 1. stranka
            pages[4], // 1. priloha
            pages[5], // 2. priloha
            pages[6], // 3. priloha
            pages[7], // ruzove prohlaseni 1. stranka
    ]
    const { width, height } = pages[0].getSize()

    // weight: 595; height: 841;
    console.log(width, height)

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            pagesList[i].drawText(data[i][j].value, {

                x: data[i][j].x,
                y: data[i][j].y,

                size: 10,
                font: customFont,
                color: rgb(0, 0, 0),
            })
        }
    }

    // TODO: add signature image

    const pdfBytes = await pdfDoc.save()
    const blob = new Blob([pdfBytes], {type: "application/pdf"});
    const link = document.createElement("a");
    //link.href = window.URL.createObjectURL(blob);
    link.href = URL.createObjectURL(blob);
    link.download = "smlouva.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);


    /*
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
    */
}

export { showPdf, generatePdf, doc_link}