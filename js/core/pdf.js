function exporterPDF() {

    const element = document.getElementById("app");

    const options = {

        margin: 10,

        filename: "FORGE.pdf",

        image: {
            type: "jpeg",
            quality: 1
        },

        html2canvas: {
            scale: 2
        },

        jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait"
        }

    };

    html2pdf().set(options).from(element).save();

}
